import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FoodsScreen from './src/screens/Foods';
import HomeScreen from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='FoodsScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='FoodsScreen' component={FoodsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
