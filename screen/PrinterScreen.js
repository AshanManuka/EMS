import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity } from 'react-native'

const PrinterScreen = ({navigation}) => {

    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');


    const handleTextChange = (inputText) => {
      onChangeText(inputText); // Update the state with the typed text
      //Implement code here to search customer by name
    };

    const itemCount = (inputText) => {
      onChangeNumber(inputText)
      //Implement code here to search customer by name
    };

    const unitPrice = (inputText) => {
      onChangeNumber(inputText); // Update the state with the typed text
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

    return (
    <View style={styles.body}>
        <Text style={styles.textThree}>Current Balance</Text>
        <Text style={styles.balance}>Rs 00.00</Text>

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
        value={number}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.inputPrice}
        placeholder='Unit Price'
        onChangeText={unitPrice}
        value={number}
        keyboardType='numeric'
      />

        
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
    textTwo:{
        color: '#dfe4ea',
        marginLeft: '-65%',
        marginTop: '5%',
        fontSize: 20,
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
        marginLeft:'15%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      inputQty:{
        height: 40,
        width:'30%',
        borderWidth: 1,
        marginTop:'12%',
        marginLeft:'-40%',
        borderTopColor:'#0a3d62',
        borderLeftColor:'#0a3d62',
        borderRightColor:'#0a3d62',
        borderBottomColor:'#fff',
        color:'#fff',
        fontSize:18,
      },
      inputPrice:{
        height: 40,
        width:'30%',
        borderWidth: 1,
        marginTop:'-10%',
        marginLeft:'35%',
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
        backgroundColor:'#fff',
        right:'-40%',
        marginTop:'-8%',
        padding:'1%',
        borderRadius:3,
      },
      balance:{
        color:'red',
        fontSize:25,
      },
      photocopySelectBtn:{
        backgroundColor:'#fff',
        paddingLeft:'1%',
        paddingRight:'1%',
        borderRadius:2,
        marginTop:'30%',
        marginLeft:'-30%'

      },
      printoutSelectBtn:{
        backgroundColor:'#fff',
        paddingLeft:'1%',
        paddingRight:'1%',
        borderRadius:2,
        marginTop:'-7%',
        marginLeft:'30%'
      },
      commonBtnText:{
        fontSize:20,
        fontWeight:'bold'
      }
          
  })
    