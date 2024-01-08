import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';


const BusinessScreen = ({navigation}) => {

    return(
        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('Printers')}>
        <Text style={styles.btnText}>Back to Home</Text>  
        </Pressable>
        </View>
    )


}
export default BusinessScreen

const styles= StyleSheet.create({
    body : {
      backgroundColor: '#0a3d62',
      alignItems: 'center',
      flex:1
    },
    btnSec:{
      backgroundColor: '#3c6382',
      width:'85%',
      height:'15%',
      margin: '3%',
      marginTop:'50%'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      height:'100%',
      backgroundColor: '#487eb0',
    },
    btnText:{
      color: '#dcdde1',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      fontWeight: 'bold'
    },
  })