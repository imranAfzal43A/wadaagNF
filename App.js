import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAdd from './screeens/postAdd';
import SearchHouse from './screeens/searchHouse';
import HouseDetails from './screeens/houseDetails';
import Listings from './screeens/listings';

function HomeScreen() {
  const navigation=useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Create Add' onPress={()=>navigation.navigate('Create Add')} />
      <Button title='Search house' onPress={()=>navigation.navigate('Search')} />
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create Add" component={CreateAdd} options={{headerShown:false}}  />
        <Stack.Screen name="Search" component={SearchHouse} options={{headerShown:false}} />
        <Stack.Screen name="House Details" component={HouseDetails} options={{headerShown:false}} />
        <Stack.Screen name="Listings" component={Listings} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
