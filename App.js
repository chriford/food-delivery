import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './src/screens/Details';
import FoodsScreen from './src/screens/Foods';
import HomeScreen from './src/screens/Home';
import CartScreen from './src/screens/Cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => {
  const Tab = createBottomTabNavigator();

  function BottomNavigater() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='food' component={FoodsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='FoodsScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='FoodsScreen' component={FoodsScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        <Stack.Screen name='CartScreen' component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
