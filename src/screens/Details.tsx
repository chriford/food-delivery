import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
    const food = route.params;
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>
                    {JSON.stringify(food)}
                    detaaaaaaaaaaaaillllll!!
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default DetailsScreen;