import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity } from 'react-native'

const PrinterScreen = ({navigation}) => {

    const [text, onChangeText] = React.useState('');
    const [qty, onChangeQty] = React.useState('');
    const [price, onChangePrice] = React.useState('');
    const [payment, onTodayPayment] = React.useState('');


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
        alert(`Input value: ${text}`);
        //search customer
      } else {
        alert('Please enter a value to search.');
      }
    };

    const makeBusiness = () => {

      alert("A set created..! ")
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

    <View></View>

    <TouchableOpacity
        style={styles.photocopySelectBtn}
        onPress={() => Alert.alert("Photocopy Selected")}
      >
        <Text style={styles.commonBtnText}>PhotoCopy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.printoutSelectBtn}
        onPress={() => Alert.alert("Photocopy Selected")}
      >
        <Text style={styles.commonBtnText}>PrintOut</Text>
      </TouchableOpacity>

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
        <Text style={styles.balance}>00.00</Text>

        <Text style={styles.textThree}>Today Bill</Text>
        <Text style={styles.balance}>00.00</Text>

        <Text style={styles.textThree}>Total Amount</Text>
        <Text style={styles.balance}>00.00</Text>
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
        onPress={makeBusiness}
      >
        <Text style={styles.processBtnText}>+ Items</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={makeBusiness}
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
        paddingLeft:'11%',
        paddingRight:'11%',
        marginTop:'30%',
        marginLeft:'-45%'

      },
      printoutSelectBtn:{
        backgroundColor:'#f5cd79',
        paddingLeft:'12%',
        paddingRight:'12%',
        marginTop:'-7.25%',
        marginLeft:'50%'
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
        marginTop:'15%',
        marginBottom:'5%',
        paddingLeft:'30%',
        paddingRight:'30%',
        paddingTop:'1%',
        paddingBottom:'2%',
        borderRadius:3
      }
          
  })
    