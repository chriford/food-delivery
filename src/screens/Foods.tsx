import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLORS from '../const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FoodTypes from '../const/food.type';
import foodList from '../const/foods';
import BottomNavigator from '../components/BottomNavigator';

const { width } = Dimensions.get('screen');
const FoodsScreen = ({ navigation }) => {
    const MenuCard = ({ item }) => {
        var item = item.item;
        return (
            <View style={styles.menuCardContainer}>
                <View style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 100,
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image style={styles.menuCardImage} source={item.image} />
                </View>
                <Text style={{ fontSize: 20, color: COLORS.orange, paddingLeft: 10 }}>{item.name}</Text>
            </View>
        )
    }

    const FoodCard = ({ food }) => {
        var food = food.item;
        return (

            <View style={styles.foodCard}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.foodCardImage} source={food.image} />
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 20 }}>
                    <View>
                        <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 24 }}>{food.name}</Text>
                        <Text style={{ color: COLORS.secondary, fontSize: 16 }}>{food.name}</Text>
                    </View>
                    <View style={{
                        top: 10,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                        <Text style={{ color: COLORS.dark, fontWeight: 'bold' }}>${food.price}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("DetailsScreen", food)
                            }}>
                            <View style={{ height: 20, width: 20, right: 10, borderRadius: 100, backgroundColor: COLORS.orange }}>
                                <Icon name='add' size={20} color={COLORS.white} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <StatusBar translucent backgroundColor={COLORS.white} />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{ fontSize: 28, color: COLORS.secondary }}>
                                <Icon name='arrow-back-ios' size={20} color={COLORS.dark} onPress={() => navigation.navigate("HomeScreen")} />Hello,
                            </Text>
                            <Text style={{ fontSize: 28, color: COLORS.dark }}> Suvia</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: COLORS.secondary }}>What do you want today?</Text>
                    </View>
                    <Image style={styles.profilePhoto} source={require('../assets/profile-photo.jpg')} />
                </View>
            </View>
            <View style={styles.searchSection}>
                <View style={styles.searchInput}>
                    <Icon name='search' size={30} color={COLORS.dark} onPress={() => navigation.navigate("HomeScreen")} />
                    <TextInput placeholder='Search for food' style={{
                        borderRadius: 10,
                        width: '70%',
                        fontSize: 18
                    }} />
                </View>
                <View style={{
                    backgroundColor: COLORS.orange,
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    width: 70,
                }}>
                    <Icon name='settings' size={30} color={COLORS.white} onPress={() => navigation.navigate("HomeScreen")} />
                </View>
            </View>

            <View style={{
                top: 20,
                left: 5
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={FoodTypes}
                    renderItem={type => <MenuCard item={type} />}
                />
            </View>
            <FlatList
                style={{ marginTop: 50, elevation: 12 }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={foodList}
                renderItem={dish => <FoodCard food={dish} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        top: 24.0,
        paddingBottom: 10,
        elevation: 2
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 40
    },
    searchInput: {
        backgroundColor: 'rgba(15, 15, 15, .1)',
        padding: 5,
        borderRadius: 10,
        paddingLeft: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    profilePhoto: {
        width: '20%',
        height: '90%',
        right: -90,
        borderRadius: 100,
    },
    menuCardContainer: {
        backgroundColor: 'rgba(255, 155, 55, 0.2)',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        padding: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    foodCard: {
        height: 220,
        backgroundColor: COLORS.white,
        marginBottom: 70,
        shadowRadius: 15,
        overflow: 'visible',
        marginHorizontal: 10,
        width: (width / 2) - 25,
        elevation: 13,

    },
    foodCardImage: {
        borderRadius: 100,
        height: 120,
        width: "65%",
        alignSelf: "center",
        top: -50,
    },
    menuCardImage: {
        borderRadius: 100,
        height: 30,
        width: 30,
    }
})

export default FoodsScreen;
