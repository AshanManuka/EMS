import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'

const DetailScreen = ({navigation}) => {

    const [text, onChangeText] = React.useState('');

    const handleTextChange = (inputText) => {
        onChangeText(inputText); // Update the state with the typed text
        //Implement code here to search customer by name
      };


    return (
    <View style={styles.container}>

        <Text style={styles.mainText}>Customers</Text>

        <Text style={styles.textOne}>Add Customer :</Text>



        <TextInput
        style={styles.inputOne}
        onChangeText={handleTextChange}
        value={text}
        />






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
        
    }

})
    