import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { appColor, styles } from "./styles";
export default function CheckBox({ color, onPress, title }) {
    return (
        <View style={styles.checkBox}>
            <Text style={{width:'80%',marginLeft:20}}>{title}</Text>
            <TouchableOpacity style={{width:'20%'}} onPress={onPress}>
                <AntDesign name="checkcircle" size={24} color={color ? appColor : '#fff'} />
            </TouchableOpacity>
        </View>
    )
}