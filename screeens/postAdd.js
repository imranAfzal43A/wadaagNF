import { TextInput, TouchableOpacity, View, Text, ScrollView, FlatList, Image } from "react-native";
import { styles } from "../components/styles";
import { useState } from "react";
import CheckBox from "../components/checkBox";
import * as ImagePicker from 'expo-image-picker';


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
    const pickImages = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            // allowsMultipleSelection: true
        });

        console.log(result);
        let image = images;
        if (!result.canceled) {
            
            image.push({
                id: images.length,
                uri: result.assets[0].uri
            })
           
        }
        setImages(image)
        console.log(images, result);


    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'tomato', borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>
                    <View style={{marginTop:30}} />
                    <TextInput placeholder="Region" onChangeText={setRegion} style={styles.textinput} />
                    <TextInput placeholder="District" onChangeText={setDistrict} style={styles.textinput} />
                    <TextInput placeholder="Home Type" onChangeText={setHomeType} style={styles.textinput} />
                    <TextInput placeholder="No. of rooms" onChangeText={setNoRooms} style={styles.textinput} keyboardType='numeric' />
                    <TextInput placeholder="No. of Kitchens" onChangeText={setNoKitchens} style={styles.textinput} keyboardType='numeric' />
                    <TextInput placeholder="No. of toilets" onChangeText={setNoToilets} style={styles.textinput} keyboardType='numeric' />
                    <TextInput placeholder="Monthly price" onChangeText={setMonthlyRent} style={styles.textinput} keyboardType='numeric' />
                    <CheckBox color={Balcony} onPress={() => setBalcony(!Balcony)} title='Does it has Balcony?' />
                    <CheckBox color={Deposit} onPress={() => setDeposit(!Deposit)} title='Is there a deposit?' />
                    {Deposit && <TextInput placeholder="Deposit amounte" onChangeText={setMonthlyRent} style={styles.textinput} keyboardType='numeric' />}
                    <CheckBox color={Upfront} onPress={() => setUpfront(!Upfront)} title='Monthly Upfront?' />
                    <TextInput placeholder="Description" onChangeText={setMonthlyRent} style={[styles.textinput,{alignSelf:'center',height:60}]} multiline={true} />
                </View>
                
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView horizontal={true}>
                        {images.map(imageObj => (
                            <Image
                                key={imageObj.id}
                                source={{ uri: imageObj.uri }}
                                style={{ width: 200, height: 220, marginHorizontal: 4 }}
                                resizeMode='contain'
                            />
                        ))}
                    </ScrollView>
                    <TouchableOpacity style={[styles.button, { width: '40%', height: 50 }]} onPress={() => pickImages()}>
                        <Text>Add images</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.button, { width: '40%', height: 50 }]}>
                        <Text>Post</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}