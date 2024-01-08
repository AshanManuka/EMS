import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { addCustomer, searchCustomersByName } from './Database';

const DetailScreen = ({navigation}) => {

    const [text, onChangeText] = React.useState('');
    const [customerName, setCustomername] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [currentBalanceValue, setBalance] = React.useState(0);
    const [currentCustomer, setCurrentCustomer] = React.useState('');

    const handleTextChange = (inputText) => {
        onChangeText(inputText);
      };

      const customerNameChange = (inputText) => {
        setCustomername(inputText);
      }

      const saveCustomer = () => {
        const customerName = text;
        const initialBalance = 0.0;

        addCustomer(customerName, initialBalance);
        alert("Customer saved!");
        onChangeText('');
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
        setBalance(balance)
        alert(name);
      }


    return (
    <View style={styles.container}>

        <Text style={styles.mainText}>Customers</Text>

        <Text style={styles.textOne}>Add Customer :</Text>

        <TextInput
        style={styles.inputOne}
        onChangeText={handleTextChange}
        value={text}
        />

        <TouchableOpacity
        style={styles.addCustomerBtn}
        onPress={saveCustomer}
        >
        <Text style={styles.processBtnText}>Save Customer</Text>
        </TouchableOpacity>

        <Text style={styles.line}>________________________________________________________________</Text>

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
        <ScrollView style={styles.searchResultsContainer}>
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


        <View style={styles.substage}>
        <Text style={styles.textThree}>Current Balance</Text>
        <Text style={styles.balance}>{currentBalanceValue}</Text>

        </View>






    </View>
    )
}
export default DetailScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0a3d62',
        alignItems: 'center',
        flex:1
    },
    mainText:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold',
        marginTop:'15%',
        marginBottom:'20%'
    },
    textOne:{
        color:'#fff',
        marginTop:'-10%',  
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
    line:{
        color:'#7f8c8d',
        fontSize:10,
        marginTop:'10%'
    },
    textTwo:{
        color:'#fff',
        fontSize:20,
        marginTop:'10%',
        fontWeight:'bold',
        marginLeft:'-50%'
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
    substage:{
      backgroundColor:'#182C61',
      borderRadius:15,
      padding:'5%',
      marginTop:'75%'
    },
    textThree:{
        color: '#dfe4ea',
        marginTop: '1%',
        marginBottom:'1%',
        marginLeft:'2%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    balance:{
        color:'#EA2027',
        fontSize:25,
        marginLeft:'55%',
        marginTop:'-10%'
    },
    searchResultsContainer: {
      position:'absolute',
      marginTop: '110%',
      height:'20%',
      width:'85%',
    },
    searchResultItem: {
      backgroundColor: '#3498db',
      padding: 8,
      marginVertical: 2,
      marginRight: 2,
      borderRadius: 5,
      
    },
    searchResultText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },

})
    