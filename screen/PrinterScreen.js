import React, { useEffect } from 'react';
import { searchCustomersByName, saveBusiness, getAllBusinessData, updateBalance } from './Database';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'

const PrinterScreen = ({navigation}) => {

    const [text, onChangeText] = React.useState('');
    const [qty, onChangeQty] = React.useState('');
    const [price, onChangePrice] = React.useState('');
    const [payment, onTodayPayment] = React.useState('');
    const [totalBalance, setTotalAmount] = React.useState(0);
    const [todayTotal, setTodayTotal] = React.useState(0);
    const [searchResults, setSearchResults] = React.useState([]);
    const [itemList, setItemList] = React.useState([]);
    const [currentBalanceValue, setBalance] = React.useState(0);
    const [currentCustomer, setCurrentCustomer] = React.useState('');
    const [currentCustomerName, setCurrentCustomerName] = React.useState('');
    const [selectedItem, setItemName] = React.useState('Not-Select');
    const [selectedPage, setSelectedPage] = React.useState('Not-Select');
    const [buttonOne, setButtonColorOne] = React.useState('#f5cd79');
    const [buttonTwo, setButtonColorTwo] = React.useState('#f5cd79');
    const [buttonThree, setButtonColorThree] = React.useState('#f5cd79');
    const [buttonFour, setButtonColorFour] = React.useState('#f5cd79');
    const [buttonFive, setButtonColorFive] = React.useState('#f5cd79');
    const [buttonSix, setButtonColorSix] = React.useState('#f5cd79');
    const [buttonSeven, setButtonColorSeven] = React.useState('#f5cd79');
    const [buttonEight, setButtonColorEight] = React.useState('#f5cd79');
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);

    useEffect(() => {
      setItemList([{id:1,name:"PhotoPrint"},{id:2,name:"Email"},{id:3,name:"TypeBinding"},{id:4,name:"WelloBinding"}]);

    }, []);
  


    const handleTextChange = (inputText) => {
      onChangeText(inputText); // Update the state with the typed text
      //Implement code here to search customer by name
    };

    const itemCount = (inputText) => {
      onChangeQty(inputText)
      //Implement code here to search customer by name
    };

    const unitPrice = (inputText) => {
      onChangePrice(inputText); // Update the state with the typed text
      //Implement code here to search customer by name
    };

    const todayPayment = (inputText) => {
      onTodayPayment(inputText); // Update the state with the typed text
      //Implement code here to search customer by name
    };

    const searchCustomer = () => {
      if (text !== '') {
        searchCustomersByName(text, (results) => {
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

    const makeBusiness = () => {
      const customerId = currentCustomer;
      const customerName = currentCustomerName;
      const itemName = selectedItem+''+selectedPage;
      const count = qty;
      const totalAmount = qty*price;

       //addBusinessData(customerId, customerName, itemName, count, totalAmount);

      const selectedItemm = {
        itemId : currentCustomer,
        name : selectedItem+' '+selectedPage,
        count : qty,
        price : price,
        total : qty*price 
    }

    const updatedCustomer = {
      cusId: currentCustomer,
      cusName:currentCustomerName,
      cusOldBalance:currentBalanceValue,
      cusToday:todayTotal 
    }

    setSelectedItems([...selectedItems, selectedItemm]);

      onChangeQty('');
      onChangePrice('');
      setButtonColorTwo('#f5cd79');
      setButtonColorOne('#f5cd79');
      setItemName('');

      setTodayTotal(totalAmount+todayTotal);
      setTotalAmount(currentBalanceValue+totalAmount+todayTotal);

        setButtonColorOne('#f5cd79');
        setButtonColorTwo('#f5cd79');
        setButtonColorThree('#f5cd79');
        setButtonColorFour('#f5cd79');
        setButtonColorFive('#f5cd79');
        setButtonColorSix('#f5cd79');
     
    }

    const saveCustomerBalance = () => {
      //const availableBlance = totalBalance - payment;
      //updateBalance(currentCustomer, availableBlance) 

      //update user by totalBlance
      const newArray = selectedItems.map(({ name, count, total }) => ({ name, count, total }));
      saveBusiness(currentCustomer, currentCustomerName, newArray);


      setTodayTotal(0);
      setTotalAmount(0);
      setBalance(0);
      onTodayPayment('');
      onChangeText('');

      alert("Successfully Save ..!");
    }


    const setBalanceToField = (name,balance,id) => {
      setCurrentCustomer(id);
      setCurrentCustomerName(name);
      setBalance(balance);
       onChangeText(name);
    }

    const selectedItemBtn = (name) => {
      setItemName(name);
      if(name == "PhotoCopy"){
        setButtonColorOne('#079992');
        setButtonColorTwo('#f5cd79');
        setButtonColorThree('#f5cd79');
        setButtonColorFour('#f5cd79');
        setButtonColorFive('#f5cd79');
        setButtonColorSix('#f5cd79');
      }
      if(name == "PrintOut(BW)"){
        setButtonColorTwo('#079992');
        setButtonColorOne('#f5cd79');
        setButtonColorThree('#f5cd79');
        setButtonColorFour('#f5cd79');
        setButtonColorFive('#f5cd79');
        setButtonColorSix('#f5cd79');
    }
      if(name == "PrintOut(color)"){
        setButtonColorThree('#079992');
        setButtonColorTwo('#f5cd79');
        setButtonColorOne('#f5cd79');
        setButtonColorFour('#f5cd79');
        setButtonColorFive('#f5cd79');
        setButtonColorSix('#f5cd79');
      }
      if(name == "Laminating"){
        setButtonColorFour('#079992');
        setButtonColorThree('#f5cd79');
        setButtonColorTwo('#f5cd79');
        setButtonColorOne('#f5cd79');
        setButtonColorFive('#f5cd79');
        setButtonColorSix('#f5cd79');
      }
      if(name == "CoverPage"){
        setButtonColorFive('#079992');
        setButtonColorThree('#f5cd79');
        setButtonColorTwo('#f5cd79');
        setButtonColorOne('#f5cd79');
        setButtonColorFour('#f5cd79');
        setButtonColorSix('#f5cd79');
      }
      if(name == "Scan"){
        setButtonColorSix('#079992');
        setButtonColorThree('#f5cd79');
        setButtonColorTwo('#f5cd79');
        setButtonColorOne('#f5cd79');
        setButtonColorFour('#f5cd79');
        setButtonColorFive('#f5cd79');
      }

      if(name == "Cancel"){
        setShowAdditionalFields(false);
      }

      console.log(name);
    }

    const selectedPageType = (page) => {
      setSelectedPage(page);
    }

    const openDropDown = () => {
      setShowAdditionalFields(true);
    }

    const goToBusiness = () => {  
      const currentCustomerId = currentCustomer;
      navigation.navigate('sellItem', {
        selectItems: selectedItems,
        currentCustomerName,
        currentCustomerId,
        currentBalanceValue,    
        todayTotal
      });
    }

    return (
    <View style={styles.body}>

      <TouchableOpacity
        style={styles.customerBtn}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.processBtnText}>Customers</Text>
      </TouchableOpacity>
        
      <Text style={styles.textTwo}>Customer</Text>

      <TextInput
        style={styles.inputOne}
        onChangeText={handleTextChange}
        value={text}
      />

      <TouchableOpacity
        style={styles.searchBtn}
        onPress={searchCustomer}
      >
        <Text style={styles.buttonText}>Search</Text>
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


    <TouchableOpacity
        style={[styles.photocopySelectBtn, { backgroundColor: buttonOne }]}
        onPress={() =>{selectedItemBtn("PhotoCopy")}}
      >
        <Text style={styles.commonBtnText}>PCopy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.bwPrintoutSelectBtn, { backgroundColor: buttonTwo }]}
        onPress={() =>{selectedItemBtn("PrintOut(BW)")}}
      >
        <Text style={styles.commonBtnText}>bwPrint</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.colorprintoutSelectBtn, { backgroundColor: buttonThree }]}
        onPress={() =>{selectedItemBtn("PrintOut(color)")}}
      >
        <Text style={styles.commonBtnText}>coPrint</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.laminateSelectBtn, { backgroundColor: buttonFour }]}
        onPress={() =>{selectedItemBtn("Laminating")}}
      >
        <Text style={styles.commonBtnText}>Lamint</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.coverPageSelectBtn, { backgroundColor: buttonFive }]}
        onPress={() =>{selectedItemBtn("CoverPage")}}
      >
        <Text style={styles.commonBtnText}>CvrPage</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.photoPrintSelectBtn, { backgroundColor: buttonSix }]}
        onPress={() =>{selectedItemBtn("Scan")}}
      >
        <Text style={styles.commonBtnText}>Scan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.a4SelectBtn, { backgroundColor: buttonSeven }]}
        onPress={() =>{selectedPageType("A4")}}
      >
        <Text style={styles.commonBtnText}>A4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.a3SelectBtn, { backgroundColor: buttonEight }]}
        onPress={() =>{selectedPageType("A3")}}
      >
        <Text style={styles.commonBtnText}>A3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.dropDownBtn, { backgroundColor: buttonEight }]}
        onPress={openDropDown}
      >
        <Text style={styles.commonBtnText}>+</Text>
      </TouchableOpacity>

  {showAdditionalFields && (
      <>
      <View style={styles.abstractView}>
          {itemList.map((result) => (
          <TouchableOpacity
            key={result.id}
            style={styles.abstractBtn}
            onPress={() => {selectedItemBtn(result.name)}}
          >
            <Text style={styles.commonBtnText}>{result.name}</Text>
          </TouchableOpacity>
          ))}

        <TouchableOpacity
        style={[styles.cancelBtn]}
        onPress={() =>{selectedItemBtn("Cancel")}}
      >
        <Text style={styles.commonBtnText}>Cancel</Text>
      </TouchableOpacity>

      </View>
      </>
  )}

      <TextInput
        style={styles.inputQty}
        placeholder='Count'
        onChangeText={itemCount}
        value={qty}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.inputPrice}
        placeholder='Unit Price'
        onChangeText={unitPrice}
        value={price}
        keyboardType='numeric'
      />

      <TouchableOpacity
        style={styles.processBtn}
        onPress={makeBusiness}
      >
        <Text style={styles.processBtnText}>Proceed</Text>
      </TouchableOpacity>

        <View style={styles.substage}>
        <Text style={styles.textThree}>Current Balance</Text>
        <Text style={styles.balance}>{currentBalanceValue}</Text>

        <Text style={styles.textThree}>Today Bill</Text>
        <Text style={styles.balance}>{todayTotal}</Text>

        <Text style={styles.textThree}>Total Amount</Text>
        <Text style={styles.balance}>{totalBalance}</Text>
        </View>

        <TextInput
        style={styles.inputPayment}
        placeholder='Payment'
        onChangeText={todayPayment}
        value={payment}
        keyboardType='numeric'
      />


        <TouchableOpacity
        style={styles.newBtn}
        onPress={goToBusiness}
      >
        <Text style={styles.processBtnText}>+ Items</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={saveCustomerBalance}
      >
        <Text style={styles.processBtnText}>Done</Text>
      </TouchableOpacity>

        
    </View>
    )
}
export default PrinterScreen

const styles= StyleSheet.create({
    body : {
      backgroundColor: '#0a3d62',
      alignItems: 'center',
      flex:1
    },
    textOne:{
      color: '#dfe4ea',
      marginTop: '5%',
      marginBottom:'10%',
      fontSize: 25,
      fontWeight: 'bold'
    },
    substage:{
      backgroundColor:'#182C61',
      borderRadius:15,
      padding:'5%',
      marginTop:'15%'
    },
    textTwo:{
        color: '#dfe4ea',
        marginLeft: '-65%',
        marginTop: '5%',
        fontSize: 22,
        fontWeight: 'bold'
      },
      textThree:{
        color: '#dfe4ea',
        marginTop: '1%',
        marginBottom:'1%',
        marginLeft:'2%',
        fontSize: 20,
        fontWeight: 'bold'
      },
      inputOne: {
        height: 40,
        width:'45%',
        borderWidth: 1,
        marginTop:'-8%',
        marginLeft:'10%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      inputQty:{
        height: 40,
        width:'25%',
        borderWidth: 2,
        marginTop:'12%',
        marginLeft:'-70%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      inputPrice:{
        height: 40,
        width:'25%',
        borderWidth: 2,
        marginTop:'-9.75%',
        marginLeft:'-10%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      inputPayment:{
        height: 40,
        width:'60%',
        borderWidth: 1,
        marginTop:'10%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      subView:{
        backgroundColor:'#2c3e50',
        marginLeft:'-70%',
        marginTop:'10%',
      },
      searchBtn:{
        backgroundColor:'#fab1a0',
        right:'-40%',
        marginTop:'-8%',
        padding:'1%',
        borderRadius:3,
      },
      balance:{
        color:'#EA2027',
        fontSize:25,
        marginLeft:'55%',
        marginTop:'-10%'
      },
      photocopySelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'5%',
        paddingRight:'5%',
        marginTop:'25%',
        marginLeft:'-65%'
      },
      bwPrintoutSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'4%',
        paddingRight:'4%',
        marginTop:'-7.25%',
        marginLeft:'-8%'
      },
      colorprintoutSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'4%',
        paddingRight:'4%',
        marginTop:'-7.25%',
        marginLeft:'48%'
      },
      laminateSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'5%',
        paddingRight:'5%',
        marginTop:'2%',
        marginLeft:'-65%'
      },
      coverPageSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'3%',
        paddingRight:'3%',
        marginTop:'-7.25%',
        marginLeft:'-8%'
      },
      photoPrintSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'7%',
        paddingRight:'7%',
        marginTop:'-7.25%',
        marginLeft:'48%'
      },
      a4SelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'12%',
        paddingRight:'12%',
        marginTop:'2%',
        marginLeft:'-45%'
      },
      a3SelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'12%',
        paddingRight:'12%',
        marginTop:'-7.25%',
        marginLeft:'20%'
      },
      cancelBtn:{
        backgroundColor:'#c0392b',
        paddingLeft:'5%',
        paddingRight:'5%',
        marginTop:'-30%',
        marginLeft:'60%'
      },
      abstractBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'5%',
        paddingRight:'5%',
        borderColor:'black',
        marginBottom:'0.5%',
        width:'45%',
        marginLeft:'-20%'
      },
      abstractView:{
        position:'absolute',
        backgroundColor:'#0a3d62',
        width:'95%',
        height:'15%',
        alignItems:'center',
        marginTop:'55%'
      },
      dropDownBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'3%',
        paddingRight:'3%',
        marginTop:'-7.25%',
        marginLeft:'65%'
      },
      commonBtnText:{
        fontSize:20,
        fontWeight:'bold'
      },
      processBtn:{
        backgroundColor:'#ffcccc',
        marginTop:'-10%',
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingTop:'1%',
        paddingBottom:'1%',
        borderRadius:2,
        marginLeft:'62%'
      },
      processBtnText:{
        fontSize:20,
        fontWeight:'bold',
      },
      newBtn:{
        backgroundColor:'#00d8d6',
        marginTop:'10%',
        paddingLeft:'10%',
        paddingRight:'10%',
        paddingTop:'2%',
        paddingBottom:'2%',
        marginLeft:'-45%',
        borderRadius:2
      },
      confirmBtn:{
        backgroundColor:'#0be881',
        marginTop:'-11.25%',
        paddingLeft:'15%',
        paddingRight:'15%',
        paddingTop:'2%',
        paddingBottom:'2%',
        marginLeft:'40%',
        borderRadius:2
      },
      customerBtn:{
        backgroundColor:'#ff7675',
        marginTop:'5%', //change again
        marginBottom:'5%',
        paddingLeft:'30%',
        paddingRight:'30%',
        paddingTop:'1%',
        paddingBottom:'2%',
        borderRadius:3
      },
      searchResultsContainer: {
        position:'absolute',
        marginTop: '40%',
        flexDirection: 'row',
        //alignItems: 'center',
        width:'99%',
      },
      searchResultItem: {
        backgroundColor: '#3498db',
        padding: 10,
        marginVertical: 5,
        marginRight: 2,
        borderRadius: 5,
        
      },
      searchResultText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
          
  })
    