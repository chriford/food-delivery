import React from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import COLORS from "../const/colors";

const WIDTH = Dimensions.get("screen")
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 0.95 }}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <View style={styles.bodyContainer}>
                <Image style={styles.imageContainer} source={require('../assets/home-icon.png')} />
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <Text style={{
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 28,
                        color: COLORS.danger
                    }}>
                        Delicious Food
                    </Text>
                    <Text>We help you to find best and delicious food</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('FoodsScreen')}>
                    <View style={styles.btn}>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.white
                        }}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '65%',
        height: '40%',
        overflow: 'hidden',
        borderRadius: 220,
        marginLeft: 20,
    },

    btn: {
        backgroundColor: COLORS.primary,
        width: '50%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        top: 60,
    },
})
export default HomeScreen;