import { useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Gallery from "../components/gallery";
import { appColor, styles } from "../components/styles";

export default function HouseDetails() {
    const route = useRoute()
    console.log(route.params)
    return (
        <View style={{flex:1}}>
            <ScrollView>
            <View style={{backgroundColor:appColor}}>
            <Gallery images={route.params.details.images} />
            </View>
            <View style={{backgroundColor:'#fff',borderColor:appColor,borderWidth:4,width:'100%',alignSelf:'center',borderBottomLeftRadius:30,borderBottomRightRadius:30,height:200,padding:10}}>
            <Text>Description :{route.params.details.description}</Text>
            <Text>Rooms :{route.params.details.rooms}</Text>
            <Text>Price :{route.params.details.price}</Text>
            </View>
            <TouchableOpacity style={[styles.button,{width:'80%',height:60,marginTop:20,marginBottom:20}]}  >
                    <Text>Buy Now</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}