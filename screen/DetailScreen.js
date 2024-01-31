import React from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import { addCustomer, searchCustomersByName, updateBalance } from './Database';

const DetailScreen = ({navigation}) => {

    const [text, onChangeText] = React.useState('');
    const [customerName, setCustomername] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [currentBalanceValue, setBalance] = React.useState(0);
    const [currentCustomer, setCurrentCustomer] = React.useState('');
    const [payment, onTodayPayment] = React.useState('');

    const handleTextChange = (inputText) => {
        onChangeText(inputText);
      };

      const handleBackgroundPress = () => {
        Keyboard.dismiss();
      };

      const todayPayment = (inputText) => {
        onTodayPayment(inputText); // Update the state with the typed text
        //Implement code here to search customer by name
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

      const setPayment = () => {
        const newBalance = currentBalanceValue - payment;
        updateBalance(currentCustomer, newBalance);

        onTodayPayment('');
        setBalance(0)
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
        setCustomername(name);
      }


    return (

      <TouchableWithoutFeedback onPress={handleBackgroundPress}>
    <View style={styles.container}>

        <Text style={styles.mainText}>Manage Customers</Text>

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


        <View style={styles.substage}>
        <Text style={styles.textThree}>Current Balance</Text>
        <Text style={styles.balance}>{currentBalanceValue}</Text>

        </View>

        <TextInput
        style={styles.inputPayment}
        keyboardAppearance="light"
        placeholder='Payment'
        onChangeText={todayPayment}
        value={payment}
        keyboardType='numeric'
      />

        <TouchableOpacity
        style={styles.paymentBtn}
        onPress={setPayment}
        >
        <Text style={styles.payedBtnText}>Payed</Text>
        </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
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
        marginBottom:'20%',
        marginLeft:'-20%'
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
    paymentBtn:{
      backgroundColor:'#1abc9c',
        paddingLeft:'20%',
        paddingRight:'20%',
        paddingTop:'2%',
        paddingBottom:'2%',
        borderRadius:2,
        marginTop:'6%',
 
    },
    payedBtnText:{
      fontWeight:'bold'

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
      padding:'10%',
      marginTop:'40%'
    },
    textThree:{
        color: '#dfe4ea',
        marginTop: '1%',
        marginLeft:'2%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    balance:{
        color:'#EA2027',
        fontSize:25,
        marginLeft:'55%',
        marginTop:'-8%'
    },
    searchResultsContainer: {
      position:'absolute',
      marginTop: '110%',
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
        height:'45%'
    },
    searchResultText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
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

})
    