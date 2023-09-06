import { TextInput, TouchableOpacity, View, Text, FlatList, ScrollView, Image, Dimensions, Modal } from "react-native";
import { appColor, fontColor, styles } from "../components/styles";
import { Feather, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { Data, images } from "../components/houseData";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Carousel from 'react-native-reanimated-carousel';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Listings() {

    const navigation = useNavigation()
    const route = useRoute()
    const [query, setQuery] = useState('')



    return (
        <View style={[styles.container, { backgroundColor: '#fff' }]}>

            <View style={{ marginTop: 80 }} />

            <FlatList
                data={images}
                renderItem={({ item }) => (

                    <TouchableOpacity style={{ flex: 1, margin: 10, borderRadius: 2 }} onPress={() => navigation.navigate("House Details", { data: item })}>
                        <Image source={{ uri: item.image[0] }} resizeMode='cover' resizeMethod='scale' style={{ width: '100%', height: 200, borderWidth: 1, borderRadius: 10 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold',color: '#D4D4D4' }}>{item.rooms} rooms</Text>
                            <Text style={{ marginTop: 10, fontWeight: 'bold', marginRight: 10 }}>{item.rating} <AntDesign name="star" size={14} color={appColor} /></Text>

                        </View>
                        <Text style={{ width: 200, marginLeft: 10, fontWeight: 'bold',  }}>{item.region}</Text>
                        <Text style={{ width: 100, marginLeft: 10, fontWeight: 'bold',alignSelf:'flex-end' }}>{item.monthlyRent} $ /<Text style={{ color: '#D4D4D4' }}>Mon</Text></Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
            <View style={{ position: 'absolute', top: 30, left: 10, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#fff', opacity: 0.8, padding: 4, borderRadius: 5, borderWidth: 1, borderColor: appColor, width: 40, height: 40, justifyContent: 'center', alignItems: 'center',alignSelf:'center' }}>
                    <AntDesign name="arrowleft" size={24} color={appColor} />
                </TouchableOpacity>
                <TextInput style={[styles.textinput, { width: '80%', alignSelf: "center", fontSize: 20 ,marginLeft:2}]} placeholder={'Search'} value={route.params.query} onChangeText={(t) => setQuery(t)} />
            </View>
        </View>
    )
}