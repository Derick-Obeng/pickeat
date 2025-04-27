import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native'
import Button from '../components/Button';




export default function Fresh({ navigation }) {
    return (
        <ImageBackground source={require('../assets/img/fresh.png')} style={styles.container} >

            <View>
                <Image source={require('../assets/img/Logo1.png')} style={styles.image} />
            </View>


            <Text style={styles.firstText}>Taking Orders for</Text>
            <Text style={styles.secondText}>Fast Deliveries</Text>

            <Button title="Get Started" onPress={() => navigation.navigate('PhoneScreen')} />




        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    firstText: {
        paddingTop: 550,
        paddingLeft: 27,

        fontSize: 30,
        fontWeight: 900,
        color: 'white'

    },
    secondText: {
        paddingLeft: 27,
        fontSize: 30,
        fontWeight: 900,
        color: 'white'
    },
    image: {
        marginTop: 60,
        width: 128.05,
        height: 100,
        right: 0,
        position: 'absolute'
    }



});