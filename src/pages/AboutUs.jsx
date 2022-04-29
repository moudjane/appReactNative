import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';
import { Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>React project with my homies</Text>
                <View style={styles.line}>
                    <Text style={styles.baseText}>
                        Mathis Oudjane:
                        <Text style={styles.innerText}> React Native</Text>
                        <FontAwesomeIcon icon={faGithub} size={10} style={{ verticalAlign: 'middle', color: 'red' }} />
                    </Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.baseText}>
                        Guillaume Maugin:
                        <Text style={styles.innerText}> React</Text>
                    </Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.baseText}>
                        Gauthier Duffier:
                        <Text style={styles.innerText}> Backend</Text>
                    </Text>
                </View>
            </SafeAreaView >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A90FF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    baseText: {
        color: 'white'
    },
    innerText: {
        color: 'red'
    }
});

export default AboutUs;