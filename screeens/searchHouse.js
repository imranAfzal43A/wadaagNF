import { TextInput, TouchableOpacity, View, Text, FlatList, ScrollView, Image, Dimensions, Modal } from "react-native";
import { appColor, fontColor, styles } from "../components/styles";
import { Feather, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { Data, images } from "../components/houseData";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Carousel from 'react-native-reanimated-carousel';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function SearchHouse() {

    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedType, setSelectedType] = useState('Type');
    const [query, setQuery] = useState('')
    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const handleTypeSelection = (type) => {
        setSelectedType(type);
        hideModal();
    };

    return (
        <View style={[styles.container, { backgroundColor: '#fff' }]}>
            <View style={{ marginTop: 40 }} />
            <View style={styles.search}>

                <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
                    <EvilIcons name="location" size={24} color={fontColor} style={{ alignSelf: 'center', marginLeft: 4 }} />
                    <TextInput style={[styles.textinput, { width: '90%', alignSelf: "center", color: '#fff' }]} cursorColor={'#fff'} placeholder="Search" placeholderTextColor={fontColor} onChangeText={(t) => setQuery(t)} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', borderRightWidth: 2 }}>
                        <MaterialIcons name="attach-money" size={24} color={fontColor} style={{ alignSelf: 'center', marginLeft: 4 }} />
                        <TextInput style={[styles.textinput, { width: '40%', alignSelf: "center" }]} placeholder="250k" placeholderTextColor={fontColor} />

                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => showModal()}>
                        <MaterialCommunityIcons name="office-building-cog" size={24} color={fontColor} style={{ alignSelf: 'center', marginLeft: 4 }} />
                        <Text style={{ alignSelf: 'center', color: fontColor, fontSize: 18 }} >{selectedType}</Text>
                        <Entypo name="chevron-down" size={24} color={fontColor} style={{ alignSelf: 'center', marginRight: 4, marginLeft: 60 }} />

                    </TouchableOpacity>

                </View>
            </View>
            <TouchableOpacity style={[styles.button, { width: '90%', height: 50, marginVertical: 10, backgroundColor: appColor }]} onPress={() => navigation.navigate('Listings', { query: query })}>
                <Text style={{ color: fontColor }}>View Listing</Text>
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
                <Carousel
                    loop
                    width={width}
                    height={height}
                    autoPlay={true}
                    data={images}
                    scrollAnimationDuration={2000}
                    onSnapToItem={(index) => console.log('current index:', index)}

                    renderItem={({ item }) => (

                        <TouchableOpacity style={{ flex: 1, margin: 10, borderRadius: 2 }} onPress={() => navigation.navigate("House Details", { data: item })}>
                            <Image source={{ uri: item.image[0] }} resizeMode='cover' resizeMethod='scale' style={{ width: '100%', height: '30%', borderWidth: 1, borderRadius: 10 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>{item.region},{item.district}</Text>
                                <Text style={{ marginTop: 10, fontWeight: 'bold', marginRight: 10 }}>{item.rating} <AntDesign name="star" size={14} color={appColor} /></Text>

                            </View>
                            <Text style={{ width: 100, marginLeft: 10, fontWeight: 'bold',color:'#D4D4D4' }}>{item.rooms} rooms</Text>
                            <Text style={{ width: 100, marginLeft: 10, fontWeight: 'bold' }}>{item.monthlyRent} $ /<Text style={{color:'#D4D4D4'}}>Mon</Text></Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.typeButton}
                            onPress={() => handleTypeSelection('A')}
                        >
                            <Text>Type A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.typeButton}
                            onPress={() => handleTypeSelection('B')}
                        >
                            <Text>Type B</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.typeButton}
                            onPress={() => handleTypeSelection('C')}
                        >
                            <Text>Type C</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}