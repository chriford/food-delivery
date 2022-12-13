import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../const/colors';

// 4260915001645387
// 06/25
// 142
const DetailsScreen = ({ navigation, route }) => {
    const food = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <View style={styles.header}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='arrow-back-ios' size={28} color={COLORS.dark} onPress={() => { navigation.navigate('FoodsScreen') }} />
                    <Text style={{
                        color: COLORS.dark,
                        fontSize: 20
                    }}>Details</Text>
                </View>
            </View>
            <View>
                <Image source={food.image} style={styles.foodImage} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        top: 60,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    foodImage: {

    },
    FoodSection: {
        
    }
})

export default DetailsScreen;