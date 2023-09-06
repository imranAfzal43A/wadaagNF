import * as React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAdd from './screeens/postAdd';
import SearchHouse from './screeens/searchHouse';
import HouseDetails from './screeens/houseDetails';
import Listings from './screeens/listings';
import { styles } from './components/styles';

function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <TouchableOpacity style={[styles.button, { width: '80%', height: 50 }]} onPress={() => navigation.navigate('Create Add')}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Post Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: '80%', height: 50 }]} onPress={() => navigation.navigate('Search')}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>=Search house</Text>
      </TouchableOpacity>

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'} />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create Add" component={CreateAdd} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchHouse} options={{ headerShown: false }} />
        <Stack.Screen name="House Details" component={HouseDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Listings" component={Listings} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
