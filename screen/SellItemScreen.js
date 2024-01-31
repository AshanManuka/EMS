import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { searchCustomersByName, searchItemByName, saveBusiness, updateBalance, updateItemCount, getItemById } from './Database';

const SellItemScreen = ({ navigation, route }) => {
  const { selectItems, currentCustomerName, currentCustomerId, Keyboard, TouchableWithoutFeedback, currentBalanceValue, todayTotal } = route.params;


    const [customerName, setCustomername] = React.useState('');
    const [currentCustomer, setCurrentCustomer] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [selectedItemList, setSelectedItemList] = React.useState([]);
    const [itemName, setItemName] = React.useState('');
    const [availableCount, setAvailableCount] = React.useState('');
    const [searchItemResults, setSearchItemResults] = React.useState([]);
    const [totalBalance, setTotalBalance] = React.useState('');
    const [currentBalance, setCurrentBalance] = React.useState('');
    const [qty, onChangeQty] = React.useState('');
    const [totalBill, onChangeTotal] = React.useState('');
    const [payment, onChangePayment] = React.useState('');
    const [selectedItems, setSelectedItems] = React.useState(selectItems || []);
    const [unitPrice, setUnitPrice] = React.useState('');
    const [selectedId, setSelectedId] = React.useState('');
    const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);


    useEffect(() => {
      if(todayTotal != null && currentCustomer != null && currentCustomerId != null && currentBalanceValue!= null){
        onChangeTotal(totalBill+todayTotal);
        setCustomername(currentCustomerName);
        setCurrentCustomer(currentCustomerId);
        setCurrentBalance(currentBalanceValue);        
      }else{
        console.log("okkkkkkkkkkk");

      }

    }, [route.params]);
    
    
    const customerNameChange = (inputText) => {
        setCustomername(inputText);
      }

      const handleBackgroundPress = () => {
        Keyboard.dismiss();
      };

    const searchItem = () => {
    if (itemName !== '') {
        searchItemByName(itemName, (results) => {
            if (results.length > 0) {
            console.log('Search results:', results);
            setSearchItemResults(results);
            } else {
            alert('No matching customers found.');
            }
        }); 
        } else {
        alert('Please enter a value to search.');
        }

    }

    const searchCustomer = () => {
    if (customerName !== '') {
        searchCustomersByName(customerName, (results) => {
        if (results.length > 0) {
            console.log('Search results:', results);
            setSearchResults(results);
        } else {
            alert('No matching customers found.');
        }
        }); 
    } else {
        alert('Please enter a value to search.');
    }
    };

    const setBalanceToField = (name,balance,id) => {
        setCurrentCustomer(id);
          setCustomername(name);
        setCurrentBalance(balance);
      }

    const changeItemName = (inputText) => {
    setItemName(inputText);
    };

    const setDataToField =(id,itemName,description,qty,price) => {
        setItemName(itemName);
        setUnitPrice(price);
        setSelectedId(id);
        setAvailableCount(qty); 
      }

      const addToList = () => {
        const selectedItem = {
            itemId : selectedId,
            name : itemName,
            count : qty,
            price : unitPrice,
            total : qty*unitPrice 
        }

        setSelectedItems([...selectedItems, selectedItem]);
        

      const customerId = currentCustomer;
      const cusName = customerName;
      const iName = itemName;
      const count = qty;
      const totalAmount = qty*unitPrice;


      const todaySub = Number(totalBill) + totalAmount;
      onChangeTotal(todaySub);
      setTotalBalance(currentBalance+todaySub);   
      //addBusinessData(customerId,cusName,iName,count,totalAmount);
      updateItemCount(selectedId,availableCount-qty);
      // getItemById(selectedId, (result) => {
      //   if(result){
      //     if(result.name == itemName){
      //       setSelectedItemList(selectedItemList.push(result));
      //     } 
      //   }
      // });

      console.log(selectedItemList);

      setShowAdditionalFields(true);

      }

      const itemCount = (inputText) => {
        onChangeQty(inputText)
        //Implement code here to search customer by name
      };

      const totalCal = (inputText) => {
        onChangeTotal(inputText)
      }

      const setPayment = (inputText) => {
        onChangePayment(inputText)
      }

      const updateBalanceOfCustomer = () => {

      const newArray = selectedItems.map(({ name, count, total }) => ({ name, count, total }));
      var finalCustomerName = 'Unknown';
      if(customerName != ''){
        finalCustomerName = customerName;
        console.log(finalCustomerName)
      }
      saveBusiness(currentCustomer, finalCustomerName, newArray);

        const availableBlance = totalBalance - payment;
        updateBalance(currentCustomer, availableBlance);

        alert("Business Completed Successfully..!");
        setCustomername('');
        setItemName('');
        onChangeTotal(0);
        onChangePayment(0);
        setShowAdditionalFields(false);
        //call function for printout
        setSelectedItems([]);
        navigation.navigate('Home');
        

      }

    return (
         
    <View style={styles.body}>
    
        <Text style={styles.textOne}>Make Business</Text>

        <Text style={styles.textTwo}>Search Customer :</Text>

        <TextInput
        style={styles.inputTwo}
        onChangeText={customerNameChange}
        value={customerName}
        />

        <TouchableOpacity
        style={styles.addCustomerBtn}
        onPress={searchCustomer}
        >
        <Text style={styles.processBtnText}>Search Customer</Text>
        </TouchableOpacity>

        {/* Display search results */}
        <ScrollView horizontal={true} style={styles.searchResultsContainer}>
        {searchResults.map((result) => (
          <TouchableOpacity
            key={result.id}
            style={styles.searchResultItem}
            onPress={() => {setBalanceToField(result.name,result.balance,result.id)}}
          >
            <Text style={styles.searchResultText}>{result.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.textThree}>Search Item</Text>

      <TextInput
            style={styles.searchInput}
            onChangeText={changeItemName}
            value={itemName}
       />

            <TouchableOpacity
            style={styles.searchItemBtn}
            onPress={searchItem}
            >
            <Text style={styles.processBtnText}>Search Item</Text>
            </TouchableOpacity>

       {/* Display search results */}
       <ScrollView horizontal={true} style={styles.searchResultsContainerTwo}>
            {searchItemResults.map((results) => (
            <TouchableOpacity
                key={results.id}
                style={styles.searchResultItem}
                onPress={() => {setDataToField(results.id,results.itemName,results.description,results.qty,results.price)}}
            >
                <Text style={styles.searchResultText}>{results.itemName}</Text>
            </TouchableOpacity>
            ))}
        </ScrollView>

        <Text style={styles.selectedName}>{itemName}</Text>
        <TextInput
        style={styles.inputQty}
        placeholder='Count'
        onChangeText={itemCount}
        value={qty}
        keyboardType='numeric'
      />

            <TouchableOpacity
                style={styles.addBtn}
                onPress={() => {addToList()}}
            >
                <Text style={styles.searchResultText}>+</Text>
            </TouchableOpacity>


            {selectedItems.length > 0 && (
            <ScrollView style={styles.selectedItemsContainer}>
                <View horizontal={true}
              style={styles.resultItem}>

               <Text style={styles.resultTextOne}>ItemId</Text>
              <Text style={styles.resultTextTwo}>Item Name</Text>
              <Text style={styles.resultTextOne}>Count</Text>
              <Text style={styles.resultTextOne}>Total</Text>
              </View>
            {selectedItems.map((result) => (
            <View horizontal={true}
              key={result.id}
              style={styles.resultItem}
            >
              <Text style={styles.resultTextOne}>{result.itemId}</Text>
              <Text style={styles.resultTextTwo}>{result.name}</Text>
              <Text style={styles.resultTextOne}>{result.count}</Text>
              <Text style={styles.resultTextOne}>{result.total}</Text>
              
            
            </View>
          ))}      
          </ScrollView>
        )} 

{showAdditionalFields && (
        <>
          <TextInput
            style={styles.totalLbl}
            placeholder="Total"
            onChangeText={totalCal}
            value={totalBill.toString()}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.paymentLbl}
            placeholder="Payment"
            onChangeText={setPayment}
            value={payment}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => {
              updateBalanceOfCustomer();
            }}
          >
            <Text style={styles.searchResultText}>Done</Text>
          </TouchableOpacity>
        </>
      )}


     </View>
    )

}
export default SellItemScreen

const styles= StyleSheet.create({
    body : {
        backgroundColor: '#0a3d62',
        alignItems: 'center',
        flex:1
    },
    textTwo:{
        color:'#fff',
        fontSize:20,
        marginTop:'5%',
        fontWeight:'bold',
        marginLeft:'-50%'
    },
    textThree:{
        color:'#fff',
        fontSize:20,
        marginTop:'25%',
        fontWeight:'bold',
        marginLeft:'-65%'
    },
    textOne:{
        color:'#fff',
        fontSize:25,
        marginTop:'10%',
        fontWeight:'bold',
        marginLeft:'-50%'
    },
    selectedName:{
        color:'#fff',
        fontSize:20,
        marginTop:'23%',
        fontWeight:'bold',
        marginLeft:'-65%'
    },
    inputTwo:{
        height: 40,
        width:'48%',
        borderWidth: 1,
        marginTop:'-10%',
        marginLeft:'48%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18, 
    },
    addCustomerBtn:{
        backgroundColor:'#1abc9c',
        paddingLeft:'10%',
        paddingRight:'10%',
        paddingTop:'2%',
        paddingBottom:'2%',
        borderRadius:2,
        marginTop:'6%',
        marginLeft:'40%'
    },
    searchResultsContainer: {
        position:'absolute',
        marginTop: '45%',
        height:'5%',
        width:'85%',
        flexDirection: 'row',
      },
      searchResultsContainerTwo:{
        position:'absolute',
        marginTop: '88%',
        height:'5%',
        width:'85%',
        flexDirection: 'row',
      },
      searchResultItem: {
        backgroundColor: '#3498db',
          padding: 10,
          marginVertical: 5,
          marginRight: 2,
          borderRadius: 5,
          height:48
      },
      addBtn:{
        backgroundColor: '#00b894',
          padding: 10,
          borderRadius: 5,
          marginTop:'-10%',
          marginLeft:'75%'
      },
      searchResultItemTwo:{
        backgroundColor: '#3498db',
          padding: 10,
          marginVertical: 5,
          marginRight: 2,
          borderRadius: 5,
          height:48
      },
      searchResultText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
    searchInput:{
        height: 40,
        width:'48%',
        borderWidth: 1,
        marginTop:'-10%',
        marginLeft:'18%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18, 
    },
    searchItemBtn:{
        backgroundColor:'#1abc9c',
        paddingLeft:'30%',
        paddingRight:'30%',
        paddingTop:'2%',
        paddingBottom:'2%',
        borderRadius:2,
        marginTop:'6%',
    },
    inputQty:{
        height: 40,
        width:'20%',
        borderWidth: 2,
        marginTop:'-10%',
        marginLeft:'40%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      selectedItemsContainer: {
        marginTop: 20,
        maxHeight: 220, // Set a height to limit the scrollable area
      },
      resultItem:{
        backgroundColor:'#2d3436',
        borderColor:'#fff',
        flexDirection: 'row',
        marginTop:'0.5%'
      },
      resultTextOne:{
        color:'#fff',
        fontWeight:'bold',
        padding:5,
        width:'20%'
      },
      resultTextTwo:{
        color:'#fff',
        fontWeight:'bold',
        padding:5,
        width:'30%'
      },
      totalLbl:{
        height: 40,
        width:'30%',
        borderWidth: 2,
        marginTop:'2%',
        marginLeft:'-60%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      paymentLbl:{
        height: 40,
        width:'30%',
        borderWidth: 2,
        marginTop:'-10%',
        marginLeft:'10%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      doneBtn:{
        backgroundColor: '#00b894',
          padding: 10,
          borderRadius: 5,
          marginTop:'-8%',
          marginLeft:'75%'

      },

  })