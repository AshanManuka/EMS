import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { searchCustomersByName, searchItemByName, addBusinessData } from './Database';

const SellItemScreen = ({navigation}) => {

    const [customerName, setCustomername] = React.useState('');
    const [currentCustomer, setCurrentCustomer] = React.useState(0);
    const [searchResults, setSearchResults] = React.useState([]);
    const [itemName, setItemName] = React.useState('');
    const [searchItemResults, setSearchItemResults] = React.useState([]);
    const [qty, onChangeQty] = React.useState('');
    const [selectedList, setSelectedList] = React.useState([]);
    const [unitPrice, setUnitPrice] = React.useState('');
    const [selectedId, setSelectedId] = React.useState(0);


    
    const customerNameChange = (inputText) => {
        setCustomername(inputText);
      }

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
        setCustomername(name)
      }

    const changeItemName = (inputText) => {
    setItemName(inputText);
    };

    const setDataToField =(id,itemName,description,qty,price) => {
        setItemName(itemName)
        setUnitPrice(price)
        setSelectedId(id) 
      }

      const addToList = () => {
        const selectedItem = {
            itemId : selectedId,
            name : itemName,
            count : qty,
            price : unitPrice,
            total : qty*unitPrice 
        }

        setSelectedList(selectedItem);

      const customerId = currentCustomer;
      const cusName = customerName;
      const iName = itemName;
      const count = qty;
      const totalAmount = qty*unitPrice;

      addBusinessData(customerId,cusName,iName,count,totalAmount);

      console.log(selectedList);

      }

      const itemCount = (inputText) => {
        onChangeQty(inputText)
        //Implement code here to search customer by name
      };

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

        <Text style={styles.selectedName}>Name: {itemName}</Text>
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
        marginTop: '50%',
        height:'5%',
        width:'85%',
        flexDirection: 'row',
      },
      searchResultsContainerTwo:{
        position:'absolute',
        marginTop: '97%',
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

  })