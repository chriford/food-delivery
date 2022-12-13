import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FoodsScreen from '../screens/Foods';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CartScreen from '../screens/Cart';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='home'
                    component={FoodsScreen}
                    options={{
                        tabBarIcon: function({color}){
                            return <Icon name="home" color={color} size={28} />
                        }
                    }}
                />
                <Tab.Screen 
                    name="arrow-back-ios"
                    component={CartScreen}
                    options={{
                        tabBarIcon: function({color}){
                            return <Icon name="arrow-back" color={color} size={28} />
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default BottomNavigator;
