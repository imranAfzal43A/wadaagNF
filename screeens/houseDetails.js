import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import Gallery from "../components/gallery";
import { appColor, styles } from "../components/styles";
import { MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import MapView from 'react-native-maps';
export default function HouseDetails() {
    const route = useRoute()
    const navigation = useNavigation()
    console.log(route.params)
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()+1];
    const dialNumber = () => {
        const url = `tel:${route.params.data.contact}`;
        Linking.openURL(url)
            .catch((error) => console.error('Error dialing number:', error));
    };
    return (
        <View style={{ flex: 1 }}>


            <ScrollView>
                <Gallery images={route.params.data.images} />
                <View style={{ backgroundColor: '#fff' }}>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 18, marginLeft: 10, fontWeight: 'bold' }}>{route.params.data.address}</Text>
                    <Text style={{ fontSize: 14, marginLeft: 10, }}>Rooms : {route.params.data.rooms}</Text>
                </View>
                <View style={{ margin: 10, padding: 4, flexDirection: 'row', borderWidth: 0.1, borderRadius: 2, borderColor: appColor }}>
                    <MaterialCommunityIcons name="calendar-clock" size={40} color={appColor} style={{ alignSelf: 'center' }} />
                    <View>
                        <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: 'bold' }}>Reserve Before {currentMonth} 1st!</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Reserve to avail discount</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginLeft: 4 }}>
                    <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>Facilities</Text>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: 'bold', alignSelf: 'center' }}>See All</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="ios-water-outline" size={40} color={appColor} />
                        <Text>Water</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="gas-cylinder" size={40} color={appColor} />
                        <Text>Gas</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialIcons name="electrical-services" size={40} color={appColor} />
                        <Text>Electricity</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="bus" size={40} color={appColor} />
                        <Text>Transport</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 20, margin: 10, fontWeight: 'bold' }}>Location</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginBottom: 100, overflow: 'hidden' }}>
                    <MapView style={{ width: '90%', height: 200 }} />
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', top: 30, left: 10, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#fff', opacity: 0.8, padding: 4, borderRadius: 5,borderWidth: 1, borderColor: appColor, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color={appColor} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: '100%', right: 0, left: 0, backgroundColor: '#fff' }}>
                <View style={{ width: '40%', justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 10, marginLeft: 10 }}>Price</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>{route.params.data.price}$/Mon</Text>
                </View>
                <TouchableOpacity style={[styles.button, { width: '40%', height: 50, marginTop: 20, marginBottom: 20, marginRight: 20 }]} onPress={() => dialNumber()}  >
                    <Text style={{ color: '#fff' }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}