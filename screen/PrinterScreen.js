import React, { useEffect } from 'react';
import { searchCustomersByName, updateBalance, saveBusiness, getAllQuickItem, addQuickItem } from './Database';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'

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
    const [quickInput, setQuickInput] = React.useState('');
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

      getQuickList();



      const staticItemList = [{id:1,itemName:"PhotoPrint"},{id:2,itemName:"Email"},{id:3,itemName:"TypeBinding"},{id:4,itemName:"WelloBinding"}];
      setItemList(staticItemList);
    }, []);


    const handleBackgroundPress = () => {
      Keyboard.dismiss();
    };
  


    const handleTextChange = (inputText) => {
      onChangeText(inputText); 
    };

    const handleQuickInputChange = (inputText) => {
      setQuickInput(inputText); 
        };

    const itemCount = (inputText) => {
      onChangeQty(inputText)
    };

    const unitPrice = (inputText) => {
      onChangePrice(inputText);
    };

    const todayPayment = (inputText) => {
      onTodayPayment(inputText);
    };

    const addQuickItems = () => {
      addQuickItem(quickInput);
      getQuickList();
    }

    const getQuickList = () => {
      getAllQuickItem((results) => {
        if (results.length > 0) {
          console.log('Search results:', results);
          setItemList(results);
        }
      });
    }

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
        setButtonColorSeven('#f5cd79');
        setButtonColorEight('#f5cd79');
     
    }

    const saveCustomerBalance = () => {
      
      //update user by totalBlance
      const newArray = selectedItems.map(({ name, count, total }) => ({ name, count, total }));
      saveBusiness(currentCustomer, currentCustomerName, newArray);
      
      const availableBlance = totalBalance - payment;
      updateBalance(currentCustomer, availableBlance); 


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

      setShowAdditionalFields(false);
    }

    const selectedPageType = (page) => {
      setSelectedPage(page);
      if(page == "A4"){
        setButtonColorSeven('#079992');
        setButtonColorEight('#f5cd79');
      }

      if(page == "A3"){
        setButtonColorSeven('#f5cd79');
        setButtonColorEight('#079992');
      }
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
    
    <TouchableWithoutFeedback onPress={handleBackgroundPress}>
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
        style={[styles.dropDownBtn]}
        onPress={openDropDown}
      >
        <Text style={styles.commonBtnText}>+</Text>
      </TouchableOpacity>

  {showAdditionalFields && (
      <>
    <View style={styles.abstractView}>
    <ScrollView horizontal={true} style={styles.searchResultsContainerTwo}>
        {itemList.map((result) => (
          <TouchableOpacity
            key={result.id}
            style={styles.searchResultItemTwo}
            onPress={() => {selectedItemBtn(result.itemName)}}
          >
            <Text style={styles.searchResultText}>{result.itemName}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TextInput
        style={styles.quickInput}
        onChangeText={handleQuickInputChange}
        value={quickInput}
      />

          <TouchableOpacity
            style={styles.addBtn}
            onPress={addQuickItems}
          >
            <Text style={styles.searchResultText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() =>{selectedItemBtn("cancel")}}
          >
            <Text style={styles.searchResultText}>Cancel</Text>
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
    </TouchableWithoutFeedback>
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
      quickInput: {
        position:'absolute',
        height: 10,
        width:'45%',
        borderWidth: 1,
        marginTop:'28%',
        marginLeft:'1%',
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
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'2%',
        paddingTop:'1%',
        marginTop:'25%',
        marginLeft:'-65%'
      },
      bwPrintoutSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'2%',
        paddingTop:'1%',
        marginTop:'-8.5%',
        marginLeft:'-8%'
      },
      colorprintoutSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'2%',
        paddingTop:'1%',
        marginTop:'-8.5%',
        marginLeft:'51%'
      },
      laminateSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'2%',
        paddingTop:'1%',
        marginTop:'1%',
        marginLeft:'-64%'
      },
      coverPageSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'2%',
        paddingTop:'1%',
        marginTop:'-8.5%',
        marginLeft:'-4%'
      },
      photoPrintSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'2%',
        paddingTop:'1%',
        marginTop:'-8.5%',
        marginLeft:'52%'
      },
      a4SelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'12%',
        paddingRight:'12%',
        paddingBottom:'0.5%',
        paddingTop:'1%',
        marginTop:'1.5%',
        marginLeft:'-50%'
      },
      a3SelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'12%',
        paddingRight:'12%',
        paddingBottom:'0.5%',
        paddingTop:'1%',
        marginTop:'-7%',
        marginLeft:'15%'
      },
      cancelBtn:{
        backgroundColor:'#c0392b',
        marginTop:'-20%',
        marginLeft:'52%',
        marginBottom:'0.5%',
        width:'45%',
      },
      addBtn:{
        position:'absolute',
        backgroundColor:'#00b894',
        marginTop:'28%',
        marginLeft:'52%',
        marginBottom:'0.5%',
        width:'36%',
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
      dropDownBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'3%',
        paddingRight:'3%',
        marginTop:'-5.75%',
        marginLeft:'55%',
        flexDirection: 'column',
      },
      commonBtnText:{
        fontSize:20,
        fontWeight:'bold'
      },
      processBtn:{
        backgroundColor:'#ffcccc',
        marginTop:'-8%',
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
        marginTop:'-9.5%',
        paddingLeft:'15%',
        paddingRight:'15%',
        paddingTop:'2%',
        paddingBottom:'2%',
        marginLeft:'40%',
        borderRadius:2
      },
      customerBtn:{
        backgroundColor:'#ff7675',
        marginTop:'15%', //change again
        marginBottom:'5%',
        paddingLeft:'30%',
        paddingRight:'30%',
        paddingTop:'1%',
        paddingBottom:'2%',
        borderRadius:3
      },
      searchResultsContainer: {
        position:'absolute',
        marginTop: '45%',
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
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
      },
      searchResultItemTwo: {
        backgroundColor: '#f5cd79',
          padding: 10,
          marginVertical: 5,
          marginRight: 2,
          borderRadius: 5,
          height:'23%'
      },
      searchResultsContainerTwo: {
        marginTop: '5%',
        height:'5%',
        width:'100%',
        flexDirection: 'row',
      },
      abstractView:{
        backgroundColor:'#0a3d62',
        width:'95%',
        height:180,
        marginTop:'-43%'
      },
          
  })
    