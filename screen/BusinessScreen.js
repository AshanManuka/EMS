import React, { useState } from 'react';
import { useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Pressable, Button, Platform, Alert } from 'react-native';
import { getAllBusinessData, searchCustomerNameById, getSelectedDateBusinessData, getTodayBusinessData  } from './Database';

const BusinessScreen = ({navigation}) => {

  const [searchResults, setSearchResults] = React.useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Close the date picker on iOS
    setSelectedDate(selectedDate || new Date());

    const formattedDate = selectedDate.toISOString().split('T')[0];
    fetchBusinessDataByDate(formattedDate);
  };


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

   const getTodayBusiness = () => {
    getTodayBusinessData((results) => {
      if (results.length > 0) {
        setSearchResults(results);
        var income = 0;
        results.forEach((element) => {
        income += element.totalAmount;
      });
        setTotalIncome(income);
      } else {
        alert('No business found.');
      }
    }); 
 };

 const fetchBusinessDataByDate = (selectedDate) => {
  getSelectedDateBusinessData(selectedDate, (results) => {
    if (results.length > 0) {
      setSearchResults(results);
      var income = 0;
      results.forEach((element) => {
        income += element.totalAmount;
      });
      setTotalIncome(income);
    } else {
      alert('No business found.');
    }
  });
};

   useEffect(() => {
    getTodayBusiness();
  }, []);

    return(
      <View style={styles.body}>

    < View style={styles.container}>

      <TouchableOpacity
        style={styles.paymentBtn}
        onPress={showDatepicker}
        >
        <Text style={styles.payedBtnText}>Select Date</Text>
       </TouchableOpacity>

       <Text style={styles.incomeTextOne}>Daily Total :</Text>
       <Text style={styles.incomeTextTwo}>{totalIncome}</Text>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
        )}
      </View>

        <ScrollView style={styles.btnSec}>
          {searchResults.map((result) => (
          <View horizontal={true}
            key={result.id}
            style={styles.searchResultItem}
          >
            <Text style={styles.searchResultTextOne}>{result.customerName}</Text>
            {/* <Text style={styles.searchResultTextOne}>{result.date}</Text> */}
            <Text style={styles.searchResultTextTwo}>{result.itemName} :{result.count}</Text>
            <Text style={styles.searchResultTextOne}>{result.totalAmount}</Text>
            
          
          </View>
        ))}      
        </ScrollView>
        </View>
    )


}
export default BusinessScreen

const styles= StyleSheet.create({
    body : {
      backgroundColor: '#3c6382',
      alignItems: 'center',
      flex:1
    },
    datePicker: {
      width: 200,
    },
    incomeTextOne:{
      color:'#fff',
      fontWeight:'600',
      fontSize:20,
      marginTop:'5%',
      marginLeft:'-5%'
    },
    incomeTextTwo:{
      color:'#fff',
      fontWeight:'600',
      fontSize:25,
      marginTop:'-6.5%',
      marginLeft:'20%'
    },
    btnSec:{
      backgroundColor: '#3c6382',
      width:'100%',
      alignSelf:'center',
      marginTop:'5%'
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
      width:'55%'
    },
    paymentBtn:{
      backgroundColor:'#1abc9c',
        paddingLeft:'15%',
        paddingRight:'15%',
        paddingTop:'2%',
        paddingBottom:'2%',
        borderRadius:2,
        marginTop:'20%',
        marginBottom:'1%',
    },
    payedBtnText:{
      fontSize:20,
        color:'#fff',
        fontWeight:'bold',
    },
      
    
  })