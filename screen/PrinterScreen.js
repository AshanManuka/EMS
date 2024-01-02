import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'

const PrinterScreen = ({navigation}) => {

    const [text, onChangeText] = React.useState('');


    return (
    <View style={styles.body}>
        <Text style={styles.textOne}>Printing Items</Text>

        <Text style={styles.textTwo}>Customer</Text>

        <TextInput
        style={styles.inputOne}
        onChangeText={onChangeText}
        value={text}
      />

      <View style={styles.subView}>
      <Text style={styles.textThree}>Customer</Text>
      <Text style={styles.textThree}>Customer</Text>
      <Text style={styles.textThree}>Customer</Text>

      </View>


        
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
        width:'55%',
        borderWidth: 1,
        borderRadius:6,
        marginTop:'-8%',
        marginLeft:'25%',
        borderColor:'#ffff',
        color:'#fff',
        fontSize:18,
      },
      subView:{
        backgroundColor:'#2c3e50',
        marginLeft:'-70%',
        marginTop:'10%',
      }
          
  })
    