import { Button, StyleSheet, Text, View } from 'react-native'

const DetailScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
        <Text>Tou Are Welcome..!</Text>
        <Button 
        title='Click For Home'
        onPress={() => navigation.navigate("Home")}
        />
    </View>
    )
}
export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
    