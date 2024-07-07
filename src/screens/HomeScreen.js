import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mindfulness Machine</Text>
            <Image source={require('../images/mentalhealth-image.webp')} style={styles.image} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Breathing Exercise')}>
                    <Text>Breathing Exercises</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <Text>Fidget Mechanism</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <Text>Journal</Text>
                </TouchableOpacity>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute', top: 50,
        // marginBottom: 100,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300, // Adjust the width as needed
        height: 200, // Adjust the height as needed
        resizeMode: 'cover', // Adjust the resize mode as needed
        position: 'absolute', top: 120,
        marginBottom: 100,
    },
    button: {
        backgroundColor: "#FFD700",
        padding: 10,
        borderRadius: 25,
        marginTop: 35,
        width: 300,
    },
    buttonContainer: {
        marginTop: 100,
    },
});

export default HomeScreen;