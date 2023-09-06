import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity, Linking, Modal, FlatList } from "react-native";
import Gallery from "../components/gallery";
import { appColor, styles } from "../components/styles";
import { MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import MapView from 'react-native-maps';
import { useState } from "react";
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
    const currentMonth = months[currentDate.getMonth() + 1];
    const [FacilitiesVisible, setFacilitiesVisible] = useState(false);
    const [seeMore, setSeeMore] = useState(false)
    const showFacilities = () => {
        setFacilitiesVisible(true);
    };

    const hideFacilities = () => {
        setFacilitiesVisible(false);
    };
    const dialNumber = () => {
        const url = `tel:${route.params.data.contact}`;
        Linking.openURL(url)
            .catch((error) => console.error('Error dialing number:', error));
    };
    return (
        <View style={{ flex: 1 }}>


            <ScrollView>
                <Gallery images={route.params.data?.image} />
                <View style={{ backgroundColor: '#fff' }}>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 18, marginLeft: 10, fontWeight: 'bold' }}>{route.params.data.region}</Text>
                    <Text style={{ fontSize: 14, marginLeft: 10, }}>Rooms : {route.params.data.rooms}</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 16 }}>
                    {!seeMore && <TouchableOpacity onPress={() => setSeeMore(true)}><Text style={{ alignSelf: 'center' }} >See more</Text></TouchableOpacity>}
                    {
                        seeMore ? <>
                            <Text style={{ margin: 6 }}>Region : {route.params.data.region}</Text>
                            <Text style={{ margin: 6 }}>District : {route.params.data.district}</Text>
                            <Text style={{ margin: 6 }}>Kitchens : {route.params.data.kitchen}</Text>
                            <Text style={{ margin: 6 }}>Toilets : {route.params.data.toilets}</Text>
                            <Text style={{ margin: 6 }}>Monthly Upfront : {route.params.data.monthlyUpfront}$</Text>
                            <Text style={{ margin: 6 }}>Balcony : {route.params.data.balcony}</Text>
                            <Text style={{ margin: 6 }}>Deposit : {route.params.data.deposit}$</Text>
                            <Text style={{ margin: 6, marginRight: 6 }}>{route.params.data.description}</Text>
                            <TouchableOpacity onPress={() => setSeeMore(false)}><Text style={{ alignSelf: 'center' }} >See Less</Text></TouchableOpacity>
                        </>
                            : null
                    }
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
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => showFacilities()}>
                        <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: 'bold', alignSelf: 'center' }}>See All</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    {
                        route.params.data?.facilities?.map((item) => {
                            return item.selected ? <View style={{ justifyContent: 'center', alignItems: 'center', margin: 8 }}>

                                {item.iconType === 'Ionicons' ? <Ionicons name={item.icon} size={40} color={item.selected ? appColor : 'black'} onPress={() => {

                                }} />
                                    : item.iconType === 'MaterialCommunityIcons' ? <MaterialCommunityIcons name={item.icon} size={40} color={item.selected ? appColor : 'black'} onPress={() => {

                                    }} />
                                        : item.iconType === 'MaterialIcons' ? <MaterialIcons
                                            name={item.icon} size={40} color={item.selected ? appColor : 'black'} onPress={() => {

                                            }}
                                        /> : null
                                }
                                <Text>{item.name}</Text>
                            </View> : null
                        })
                    }

                </View>
                <Text style={{ fontSize: 20, margin: 10, fontWeight: 'bold' }}>Location</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginBottom: 100, overflow: 'hidden' }}>
                    <MapView style={{ width: '90%', height: 200 }} />
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', top: 30, left: 10, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#fff', opacity: 0.8, padding: 4, borderRadius: 5, borderWidth: 1, borderColor: appColor, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color={appColor} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: '100%', right: 0, left: 0, backgroundColor: '#fff' }}>
                <View style={{ width: '40%', justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 10, marginLeft: 10 }}>Price</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>{route.params.data.monthlyRent}$/Mon</Text>
                </View>
                <TouchableOpacity style={[styles.button, { width: '40%', height: 50, marginTop: 20, marginBottom: 20, marginRight: 20 }]} onPress={() => dialNumber()}  >
                    <Text style={{ color: '#fff' }}>Book Now</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={FacilitiesVisible}
                onRequestClose={hideFacilities}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <FlatList data={route.params.data.facilities} renderItem={({ item, index }) => {
                            return item.selected ? (
                                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 8 }}>

                                    {item.iconType === 'Ionicons' ? <Ionicons name={item.icon} size={40} color={appColor} />
                                        : item.iconType === 'MaterialCommunityIcons' ? <MaterialCommunityIcons name={item.icon} size={40} color={appColor} />
                                            : item.iconType === 'MaterialIcons' ? <MaterialIcons
                                                name={item.icon} size={40} color={appColor} /> : null
                                    }
                                    <Text>{item.name}</Text>
                                </View>
                            ) : null
                        }}
                            numColumns={4}
                        />
                    </View>
                    <TouchableOpacity onPress={() => hideFacilities()}>
                        <Ionicons name="close-circle-outline" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}