import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Pressable, Button, Alert } from 'react-native';
import { addItem, searchItemByName } from './Database';

const SellScreen = ({navigation}) => {



    const [text, onChangeText] = React.useState('');
    const [itemDescription, setItemDescription] = React.useState('');
    const [unitPrice, setUnitPrice] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [itemName, setItemName] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);


  const handleTextChange = (inputText) => {
    onChangeText(inputText);
  };

  const changeItemName = (inputText) => {
    setItemName(inputText);
  };

  const changeUnitPrice = (inputText) => {
   setUnitPrice(inputText);
  };

  const changeQuantity = (inputText) => {
    setQuantity(inputText);
   };

  const changeItemDescription = (inputText) => {
    setItemDescription(inputText);
  };

  const saveItem = () => {
    const iName = text;
    const iDesc = itemDescription;
    const iPrice = unitPrice;
    const iQty = quantity;

    console.log(iName,iDesc,iPrice,iQty);
    addItem(iName,iDesc,iQty,iPrice);

    alert("Item Saved Succesfully..!");

    onChangeText('');
    setItemDescription(''),
    setUnitPrice('')
    setQuantity('')

  }

  
  const searchItem = () => {
    if (itemName !== '') {
        searchItemByName(itemName, (results) => {
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

  }

  const setDataToField =(itemName,description,qty,unitPrice) => {
    onChangeText(itemName);
    setItemDescription(description),
    setUnitPrice(String(qty))
    setQuantity(String(unitPrice))

  }



    return(

        <View style={styles.container}>
            <Text style={styles.mainText}>Items</Text>

            <Text style={styles.searchText}>Search Item :</Text>

            <TextInput
            style={styles.searchInput}
            onChangeText={changeItemName}
            value={itemName}
            />


            <TouchableOpacity
            style={styles.addCustomerBtn}
            onPress={searchItem}
            >
            <Text style={styles.processBtnText}>Search Item</Text>
            </TouchableOpacity>

            <Text style={styles.lineOne}>__________________________________________</Text>

            <Text style={styles.textOne}>Item Name :</Text>

            <TextInput
            style={styles.inputOne}
            onChangeText={handleTextChange}
            value={text}
            />

            <Text style={styles.textTwo}>Description :</Text>

            <TextInput
            style={styles.inputTwo}
            onChangeText={changeItemDescription}
            value={itemDescription}
            />

            <Text style={styles.textTwo}>Quantity :</Text>

            <TextInput
            style={styles.inputTwo}
            onChangeText={changeQuantity}
            value={quantity}
            keyboardType='numeric'
            />

            <Text style={styles.textTwo}>Unit Price :</Text>

            <TextInput
            style={styles.inputTwo}
            onChangeText={changeUnitPrice}
            value={unitPrice}
            keyboardType='numeric'
            />

            <TouchableOpacity
            style={styles.addCustomerBtn}
            onPress={saveItem}
            >
            <Text style={styles.processBtnText}>Save Item</Text>
            </TouchableOpacity>

            <Text style={styles.line}>__________________________________________</Text>


            {/* Display search results */}
            <ScrollView  style={styles.searchResultsContainer}>
            {searchResults.map((results) => (
            <TouchableOpacity
                key={results.id}
                style={styles.searchResultItem}
                onPress={() => {setDataToField(results.itemName,results.description,results.qty,results.price)}}
            >
                <Text style={styles.searchResultText}>{results.itemName}</Text>
            </TouchableOpacity>
            ))}
        </ScrollView>
            
         </View>

    )


}
export default SellScreen

const styles= StyleSheet.create({
    container: {
        backgroundColor: '#0a3d62',
        alignItems: 'center',
        flex:1
    },
    searchResultsContainer:{
        width:'80%',
        marginTop:'2%',
        marginBottom:'5%'
    


    },
    searchResultItem:{
        backgroundColor: '#3498db',
        padding: 6,
        marginVertical: 2,
        marginRight: 2,
        borderRadius: 5,
        height:'15%'


    },
    searchResultText:{
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',

    },
    mainText:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold',
        marginTop:'15%',
        marginBottom:'20%'
    },
    searchText:{
        color:'#fff',
        marginTop:'-10%',  
        marginLeft:'-55%',
        fontWeight:'bold',
        fontSize:20
    },
    searchInput:{
        height: 40,
        width:'50%',
        borderWidth: 1,
        marginTop:'-10%',
        marginLeft:'40%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,   
    },
    textOne:{
        color:'#fff',
        marginTop:'5%',  
        marginLeft:'-55%',
        fontWeight:'bold',
        fontSize:20
    },
    inputOne:{
        height: 40,
        width:'50%',
        borderWidth: 1,
        marginTop:'-10%',
        marginLeft:'40%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,   
    },
    textTwo:{
        color:'#fff',
        marginTop:'10%',  
        marginLeft:'-55%',
        fontWeight:'bold',
        fontSize:20
    },
    inputTwo:{
        height: 40,
        width:'45%',
        borderWidth: 1,
        marginTop:'-10%',
        marginLeft:'40%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,   
    },
    addCustomerBtn:{
        backgroundColor:'#1abc9c',
        paddingLeft:'30%',
        paddingRight:'30%',
        paddingTop:'2%',
        paddingBottom:'2%',
        borderRadius:2,
        marginTop:'6%',
        
    },
    line:{
        color:'#7f8c8d',
        fontSize:12,
        marginTop:'5%'
    },
    lineOne:{
        color:'#7f8c8d',
        fontSize:12,
        marginTop:'5%'
    },
    
    
      
    
  })