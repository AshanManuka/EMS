import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Pressable, Button, Alert } from 'react-native';
import { getAllBusinessData, searchCustomerNameById  } from './Database';

const BusinessScreen = ({navigation}) => {



  const [searchResults, setSearchResults] = React.useState([]);


  const searchBusiness = () => {
      getAllBusinessData((results) => {
        if (results.length > 0) {
          console.log('Search results:', results);
          setSearchResults(results);
        } else {
          alert('No business found.');
        }
      }); 
   };


   useEffect(() => {
    searchBusiness();
  }, []);

    return(
        <ScrollView style={styles.btnSec}>
          {searchResults.map((result) => (
          <View horizontal={true}
            key={result.id}
            style={styles.searchResultItem}
          >
            <Text style={styles.searchResultTextOne}>{result.customerName}</Text>
            <Text style={styles.searchResultTextOne}>{result.date}</Text>
            <Text style={styles.searchResultTextTwo}>{result.itemName} :{result.count}</Text>
            <Text style={styles.searchResultTextOne}>{result.totalAmount}</Text>
            
          
          </View>
        ))}      
        </ScrollView>
    )


}
export default BusinessScreen

const styles= StyleSheet.create({
    body : {
      backgroundColor: '#3c6382',
      alignItems: 'center',
      flex:1
    },
    btnSec:{
      backgroundColor: '#3c6382',
      width:'100%',
      alignSelf:'center',
      marginTop:'20%'
    },
    searchResultItem:{
      backgroundColor:'#2d3436',
      borderColor:'#fff',
      marginBottom:'0.5%',
      flexDirection: 'row',
    },
    searchResultTextOne:{
      color:'#fff',
      fontWeight:'bold',
      padding:5,
      width:'25%'
    },
    searchResultTextTwo:{
      color:'#fff',
      fontWeight:'bold',
      padding:5,
      width:'34%'
    }
      
    
  })