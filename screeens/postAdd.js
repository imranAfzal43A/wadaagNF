import { TextInput, TouchableOpacity, View, Text, ScrollView, Image, Modal } from "react-native";
import { appColor, fontColor, styles } from "../components/styles";
import { useState } from "react";
import CheckBox from "../components/checkBox";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';


export default function CreateAdd() {
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
    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedType, setSelectedType] = useState('Type');

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

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={{ margin: 8 }}>
                {images.map(imageObj => (
                    <View key={imageObj.id} style={{ position: 'relative' }}>
                        <Image
                            source={{ uri: imageObj.uri }}
                            style={{ width: 200, height: 220, marginHorizontal: 4 }}
                            resizeMode='contain'
                        />
                        <TouchableOpacity
                            onPress={() => {
                                const newImages = images.filter(img => img.id !== imageObj.id);
                                setImages(newImages);
                            }}
                            style={{ position: 'absolute', top: 20, right: 10, padding: 5, backgroundColor: '#D4D4D4', borderRadius: 5 }}
                        >
                            <FontAwesome name="remove" size={20} color="black" />
                        </TouchableOpacity>
                    </View>

                ))}
            </ScrollView>


            {images.length < 3 && <TouchableOpacity style={[styles.button, { width: '40%', height: 50 }]} onPress={() => pickImages()}>
                <Text>Add images*</Text>
            </TouchableOpacity>}
            <ScrollView>
                <View style={{ marginTop: 30 }} />
                <TextInput placeholder="Region*" onChangeText={setRegion} style={styles.textinput} />
                <TextInput placeholder="District*" onChangeText={setDistrict} style={styles.textinput} />
                <TouchableOpacity style={[styles.textinput, { justifyContent: 'center' }]} onPress={() => showModal()}>
                    <Text style={{ fontSize: 18, justifyContent: 'center' }} >{selectedType}</Text>
                </TouchableOpacity>
                <TextInput placeholder="No. of rooms*" onChangeText={setNoRooms} style={styles.textinput} keyboardType='numeric' />
                <TextInput placeholder="No. of Kitchens*" onChangeText={setNoKitchens} style={styles.textinput} keyboardType='numeric' />
                <TextInput placeholder="No. of toilets*" onChangeText={setNoToilets} style={styles.textinput} keyboardType='numeric' />
                <TextInput placeholder="Monthly price*" onChangeText={setMonthlyRent} style={styles.textinput} keyboardType='numeric' />
                <CheckBox color={Balcony} onPress={() => setBalcony(!Balcony)} title='Does it has Balcony?' />
                <CheckBox color={Deposit} onPress={() => setDeposit(!Deposit)} title='Is there a deposit?' />
                {Deposit && <TextInput placeholder="Deposit amounte*" onChangeText={setMonthlyRent} style={styles.textinput} keyboardType='numeric' />}
                <CheckBox color={Upfront} onPress={() => setUpfront(!Upfront)} title='Monthly Upfront?' />
                <TextInput placeholder="Description*" onChangeText={setMonthlyRent} style={[styles.textinput, { alignSelf: 'center', height: 60 }]} multiline={true} />
                <View style={{ marginBottom: 30 }} />


                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>


                    <TouchableOpacity style={[styles.button, { width: '80%', height: 50 }]}>
                        <Text>Post</Text>
                    </TouchableOpacity>
                </View>
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
        </View>
    )
}