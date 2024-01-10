import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Pressable, Button, Alert } from 'react-native';
import { getAllBusinessData, searchCustomerNameById  } from './Database';

const SellScreen = ({navigation}) => {



  const [searchResults, setSearchResults] = React.useState([]);




    return(

        <View style={styles.container}>
            
            
         </View>

    )


}
export default SellScreen

const styles= StyleSheet.create({
    body : {
      backgroundColor: '#3c6382',
      alignItems: 'center',
      flex:1
    },
    container:{
      backgroundColor: '#3c6382',
      width:'100%',
      alignSelf:'center',
      marginTop:'20%'
    },
    
      
    
  })