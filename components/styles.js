import { Dimensions, StyleSheet } from "react-native";
const width=Dimensions.get('window').width
export const appColor = '#7e287e'
export const fontColor='#fff'
export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textinput: {
        width: '90%',
        height: 40,
        borderRadius: 2,
        marginVertical: 8,
        //backgroundColor: '#D4D4D4',
        paddingLeft: 10,
        borderColor:appColor,borderWidth:0.1,alignSelf:'center'
    },
    checkBox: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 4
    },
    button: {
        backgroundColor: appColor,
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

        borderColor: 'gray',
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#fff'

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      typeButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
      },
      sort: {
        margin: 6,
        backgroundColor: '#D4D4D4', justifyContent: 'center', alignItems: 'center', padding: 10, width: 100, borderRadius: 5
    },
    search: { width: '100%', backgroundColor: appColor, width: width / 1.1, alignSelf: 'center', borderRadius: 10 }
})