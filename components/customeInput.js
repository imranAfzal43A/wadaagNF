import { View, TextInput } from "react-native";
import { FontAwesome, MaterialIcons, Entypo, EvilIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { appColor } from "./styles";

export default function CustomInput({ placeholder, onChangeText, style, iconType, icon }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', borderWidth: 1, width: '90%', alignSelf: 'center', borderRadius: 4, backgroundColor: '#D4D4D4', marginVertical: 3 }}>
            {
                iconType === 'FontAwesome' ? <FontAwesome name={icon} size={24} color={appColor} style={{ alignSelf: 'center' }} />
                    : iconType === 'MaterialIcons' ? <MaterialIcons name={icon} size={24} color={appColor} style={{ alignSelf: 'center' }} />
                        : iconType === 'Entypo' ? <Entypo name={icon} size={24} color={appColor} style={{ alignSelf: 'center' }} />
                            : iconType === 'EvilIcons' ? <EvilIcons name={icon} size={24} color={appColor} style={{ alignSelf: 'center' }} />
                                : iconType === 'Ionicons' ? <Ionicons name={icon} size={24} color={appColor} style={{ alignSelf: 'center' }} />
                                    : iconType === 'FontAwesome5' ? <FontAwesome5 name={icon} size={24} color={appColor} style={{ alignSelf: 'center' }} />
                                        : iconType === 'MaterialCommunityIcons' ? <MaterialCommunityIcons name={icon} size={24} color={appColor} style={{ alignSelf: 'center' }} />
                                            : null
            }
            <TextInput placeholder={placeholder} onChangeText={onChangeText} style={style} />
        </View>
    )
}