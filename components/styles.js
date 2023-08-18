import { StyleSheet } from "react-native";

export const appColor = '#9F2B68'
export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textinput: {
        width: '90%',
        height: 40,
        borderRadius: 5,
        marginVertical: 4,
        backgroundColor: '#D4D4D4',
        paddingLeft: 10
    },
    checkBox: {
        flexDirection: 'row',
        // justifyContent:'space-evenly',
        width: '100%',
        marginVertical: 4
    },
    button: {
        backgroundColor: '#D4D4D4',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4
    },
    buttonContainer: {
        flexDirection: 'row',
         
        marginBottom: 10,
    },
    
    houseContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 4,
        width: '47%',
        borderRadius:5

    },
    sort:{
        margin:6,
        backgroundColor:'#D4D4D4',justifyContent:'center',alignItems:'center',padding:10,width:100,borderRadius:5
    }
})