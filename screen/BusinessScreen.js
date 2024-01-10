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
            <Text style={styles.searchResultText}>{result.customerName}</Text>
            <Text style={styles.searchResultText}>{result.date}</Text>
            <Text style={styles.searchResultText}>{result.itemName}</Text>
            <Text style={styles.searchResultText}>{result.totalAmount}</Text>
            {/* <TouchableOpacity
            key={result.customerId}
            style={styles.searchResultItem}
            onPress={() => {editBusinessDetails()}}
          >
            <Text style={styles.searchResultText}>Edit</Text>
          </TouchableOpacity> */}
          
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
      width:'95%',
      alignSelf:'center',
      marginTop:'20%'
    },
    searchResultItem:{
      backgroundColor:'#2d3436',
      borderColor:'#fff',
      marginBottom:'1%',
      flexDirection: 'row',
    },
    searchResultText:{
      color:'#fff',
      fontWeight:'bold',
      padding:5,
      width:'28%'
    }
      
    
  })