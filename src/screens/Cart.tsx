import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import foodList from '../const/foods';

const { width } = Dimensions.get('screen')

const CartScreen = ({ navigation, route }) => {
    const food = route.params;
    const FoodCard = ({ item }) => {
        var item = item.item;
        return (
            <View style={styles.foodCard} key={item.id}>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',

                }}>
                    <View style={{ justifyContent: 'center', height: 100, width: 150 }}>
                        <Image style={styles.imageDetail} source={food.image} />
                    </View>

                    <View style={{
                        // backgroundColor: 'gray',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: "55%"
                    }}>
                        <View style={{
                            flexDirection: 'column',
                        }}>
                            <Text style={{ color: COLORS.dark, fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
                            <Text style={{ color: COLORS.secondary }}>{food.name}</Text>
                            <Text style={{ color: COLORS.dark, fontSize: 18, fontWeight: 'bold' }}>${food.price}</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 20, left: 20 }}>{1}</Text>
                            <TouchableOpacity>
                                <View style={styles.cartBtn}>
                                    <Icon name="remove" size={25} color={COLORS.white} onPress={() => navigation.navigate("DetailsScreen", food)} />
                                    <Icon name="add" size={25} color={COLORS.white} onPress={() => navigation.navigate("DetailsScreen", food)} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} color={COLORS.dark} onPress={() => navigation.navigate("DetailsScreen", food)} />
                <Text style={{ fontSize: 20, color: COLORS.dark }}>Cart</Text>
            </View>
            <FlatList
                numColumns={1}
                data={foodList}
                renderItem={item => <FoodCard item={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: "20%",
        backgroundColor: COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    foodCard: {
        height: 120,
        backgroundColor: COLORS.white,
        marginBottom: 30,
        shadowRadius: 15,
        overflow: 'visible',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        width: width - 25,
        elevation: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    imageDetail: {
        justifyContent: 'center',
        height: "70%",
        width: "47%",
        borderRadius: 100,
    },
    cartBtn: {
        flexDirection: 'row',
        backgroundColor: COLORS.orange,
        paddingHorizontal: 10,
        padding: 5,
        borderRadius: 20,
    }
})
export default CartScreen;