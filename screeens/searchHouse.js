import { TextInput, TouchableOpacity, View, Text, FlatList, ScrollView } from "react-native";
import { styles } from "../components/styles";
import { Feather } from '@expo/vector-icons';
import { Data } from "../components/houseData";
import { useState } from "react";
export default function SearchHouse() {
    const [sortedHouses, setSortedHouses] = useState([...Data]);

    const sortByPrice = () => {
        const sortedByPrice = [...sortedHouses].sort((a, b) => a.price - b.price);
        setSortedHouses(sortedByPrice);
    };

    const sortByRooms = () => {
        const sortedByRooms = [...sortedHouses].sort((a, b) => a.rooms - b.rooms);
        setSortedHouses(sortedByRooms);
    };
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <TextInput style={[styles.textinput, { width: '80%', marginLeft: 10, marginTop: 10 }]} placeholder="Search" />
                <TouchableOpacity style={[{ width: '15%', justifyContent: 'center' }]}>
                    <Feather name="search" size={24} color="black" style={{ alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>
            <Text style={{margin:10,marginBottom:-2}}>Sort by:</Text>
            <ScrollView horizontal={true} style={{height:70}}>
                <TouchableOpacity style={styles.sort} onPress={sortByPrice}>
                    <Text>Price</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sort} onPress={sortByRooms}>
                    <Text>Rooms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sort} onPress={sortByRooms}>
                    <Text>Type</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sort} onPress={sortByRooms}>
                    <Text>Region</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sort} onPress={sortByRooms}>
                    <Text>District</Text>
                </TouchableOpacity>
            </ScrollView>
            <FlatList
                data={sortedHouses}
                renderItem={({ item }) => (
                    <View style={styles.houseContainer}>
                        <Text>House ID: {item.id}</Text>
                        <Text>Price: ${item.price}</Text>
                        <Text>Rooms: {item.rooms}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={2}

            />
        </View>
    )
}