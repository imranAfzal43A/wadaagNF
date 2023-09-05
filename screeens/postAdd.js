import { TextInput, TouchableOpacity, View, Text, ScrollView, Image, Modal, FlatList } from "react-native";
import { appColor, fontColor, styles } from "../components/styles";
import { useState } from "react";
import CheckBox from "../components/checkBox";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CustomInput from "../components/customeInput";

const FacilitiesList = [{
    iconType: 'Ionicons',
    icon: "ios-water-outline",
    name: 'Water',
    selected: true,
},
{
    iconType: 'MaterialCommunityIcons',
    icon: "gas-cylinder",
    name: 'Gas',
    selected: true,
},
{
    iconType: 'MaterialIcons',
    icon: "electrical-services",
    name: 'Electricity',
    selected: true,
},
{
    iconType: 'Ionicons',
    icon: "bus",
    name: 'Transport',
    selected: true,
},]
export default function CreateAdd() {
    const [listOfFacilities, setListofFacilities] = useState(listOfFacilities)
    const [Region, setRegion] = useState()
    const [District, setDistrict] = useState()
    const [HomeType, setHomeType] = useState()
    const [NoRooms, setNoRooms] = useState()
    const [NoKitchens, setNoKitchens] = useState()
    const [NoToilets, setNoToilets] = useState()
    const [MonthlyRent, setMonthlyRent] = useState()
    const [Balcony, setBalcony] = useState(false)
    const [Deposit, setDeposit] = useState(false)
    const [Upfront, setUpfront] = useState(false)
    const [description, setDescription] = useState(false)
    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedType, setSelectedType] = useState('Type');
    const [FacilitiesVisible, setFacilitiesVisible] = useState(false);

    const toggleSelected = (index) => {
        const updatedData = [...FacilitiesList];
        updatedData[index].selected = !updatedData[index].selected;
        setListofFacilities(updatedData);
    };
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
    const showFacilities = () => {
        setFacilitiesVisible(true);
    };

    const hideFacilities = () => {
        setFacilitiesVisible(false);
    };


    const pickImages = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
            aspect: [1, 1]
        });

        console.log(result);
        let image = images;
        image.push({
            id: images.length,
            uri: result.assets[0].uri
        })
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setImages(image)
        }

        console.log(images, result);


    };
    const handlePostAdd = async () => {
        try {
            const add = {
                region: Region,
                district: District,
                type: selectedType,
                rooms: NoRooms,
                kitchen: NoKitchens,
                toilets: NoToilets,
                monthlyRent: MonthlyRent,
                monthlyUpfront: Upfront,
                description: description,
                deposit: Deposit,
                balcony: Balcony,
                image: images,
                facilities: FacilitiesList


            }
            alert('Add has been posted successfully!')

        } catch (e) {
            alert('Something went wrong, try again!')
            console.log(e)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <ScrollView horizontal={true} style={{ margin: 8, width: '100%' }}>
                    {images.map(imageObj => (
                        <View key={imageObj.id} style={{ position: 'relative' }}>
                            <Image
                                source={{ uri: imageObj.uri }}
                                style={{ width: 200, height: 320, marginHorizontal: 4 }}
                                resizeMode='cover'
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    const newImages = images.filter(img => img.id !== imageObj.id);
                                    setImages(newImages);
                                }}
                                style={{ position: 'absolute', top: 30, right: 10, padding: 5, backgroundColor: '#D4D4D4', borderRadius: 5 }}
                            >
                                <FontAwesome name="remove" size={20} color={appColor} />
                            </TouchableOpacity>
                        </View>

                    ))}

                    {images.length < 3 && <TouchableOpacity style={[{ width: 330, height: 200, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row', }]} onPress={() => pickImages()}>
                        <MaterialIcons name="add-a-photo" size={54} color={appColor} style={{ alignSelf: 'center' }} />

                    </TouchableOpacity>}

                </ScrollView>
                <ScrollView>
                    <View style={{ marginTop: 30 }} />
                    <CustomInput placeholder={"Region*"} onChangeText={setRegion} style={styles.textinput} iconType={'Ionicons'} icon={'ios-locate'} />

                    <CustomInput placeholder="District*" onChangeText={setDistrict} style={styles.textinput} iconType={'Ionicons'} icon={'location-sharp'} />
                    <TouchableOpacity style={[styles.textinput, { justifyContent: 'center' }]} onPress={() => showModal()}>
                        <Text style={{ fontSize: 18, justifyContent: 'center' }} >{selectedType}</Text>
                    </TouchableOpacity>
                    <CustomInput placeholder="No. of rooms*" onChangeText={setNoRooms} style={styles.textinput} keyboardType='numeric' iconType={'FontAwesome5'} icon={'restroom'} />
                    <CustomInput placeholder="No. of Kitchens*" onChangeText={setNoKitchens} style={styles.textinput} keyboardType='numeric' iconType={'MaterialIcons'} icon={'kitchen'} />
                    <CustomInput placeholder="No. of toilets*" onChangeText={setNoToilets} style={styles.textinput} keyboardType='numeric' iconType={'MaterialCommunityIcons'} icon={'toilet'} />
                    <CustomInput placeholder="Monthly price*" onChangeText={setMonthlyRent} style={styles.textinput} keyboardType='numeric' iconType={'MaterialIcons'} icon={'attach-money'} />
                    <CheckBox color={Balcony} onPress={() => setBalcony(!Balcony)} title='Does it has Balcony?' />
                    <CheckBox color={Deposit} onPress={() => setDeposit(!Deposit)} title='Is there a deposit?' />
                    {Deposit && <CustomInput placeholder="Deposit amounte*" onChangeText={setMonthlyRent} style={styles.textinput} keyboardType='numeric' iconType={'MaterialIcons'} icon={'attach-money'} />}
                    <CheckBox color={Upfront} onPress={() => setUpfront(!Upfront)} title='Monthly Upfront?' />
                    <CustomInput placeholder="Description*" onChangeText={setDescription} style={[styles.textinput, { alignSelf: 'center', height: 60 }]} multiline={true} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginLeft: 4 }}>
                        <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>Facilities</Text>
                        <TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }} onPress={() => showFacilities()} >
                            <Text style={{ fontSize: 14, marginLeft: 10, fontWeight: 'bold', alignSelf: 'center' }}>Add</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        {
                            FacilitiesList.map((item, index) => {
                                return (
                                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 8 }}>

                                        {item.selected ?
                                            <>
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
                                            </>
                                            : null
                                        }
                                    </View>
                                )
                            })
                        }

                    </View>
                    <View style={{ marginBottom: 30 }} />


                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>


                        <TouchableOpacity style={[styles.button, { width: '80%', height: 50 }]} onPress={() => handlePostAdd()}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ScrollView>
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={FacilitiesVisible}
                onRequestClose={hideFacilities}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>

                        <FlatList data={FacilitiesList} renderItem={({ item, index }) => {
                            return (
                                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 8 }}>

                                    {item.iconType === 'Ionicons' ? <Ionicons name={item.icon} size={40} color={item.selected ? appColor : 'black'} onPress={() => {
                                        toggleSelected(index)
                                    }} />
                                        : item.iconType === 'MaterialCommunityIcons' ? <MaterialCommunityIcons name={item.icon} size={40} color={item.selected ? appColor : 'black'} onPress={() => {
                                            toggleSelected(index)
                                        }} />
                                            : item.iconType === 'MaterialIcons' ? <MaterialIcons
                                                name={item.icon} size={40} color={item.selected ? appColor : 'black'} onPress={() => {
                                                    toggleSelected(index)
                                                }}
                                            /> : null
                                    }
                                    <Text>{item.name}</Text>
                                </View>
                            )
                        }}
                            numColumns={3}
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