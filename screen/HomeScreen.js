import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'

const HomeScreen = ({navigation}) => {

    return (
        

    <View style={styles.body}>
        <Text style={styles.textOne}>E-Net Computer Shop</Text>

        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('Printers')}>
        <Text style={styles.btnText}>PrintOut/PhotoCopy</Text>  
        </Pressable>
        </View>

        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.btnText}>Selling Item</Text>
        </Pressable>
        </View>

        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.btnText}>Customers</Text>  
        </Pressable>
        </View>

        <View style={styles.btnSec}>
        <Pressable style={styles.button}
        onPress={() => Alert.alert('Under Development..!')}>
        <Text style={styles.btnText}>Settings</Text>  
        </Pressable>
        </View>

     </View>




    )

}
export default HomeScreen

const styles= StyleSheet.create({
    body : {
      backgroundColor: '#0a3d62',
      alignItems: 'center',
      flex:1
    },
    textOne:{
      color: '#dfe4ea',
      marginTop: '20%',
      marginBottom:'10%',
      fontSize: 20,
      fontWeight: 'bold'
    },
    btnSec:{
      backgroundColor: '#3c6382',
      width:'85%',
      height:'15%',
      margin: '3%'
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