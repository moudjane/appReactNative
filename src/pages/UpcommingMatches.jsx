import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default UpcommingMatches = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.head}>
                    {/* <Header /> */}
                </View>
                <View style={styles.btn} >
                    <Button
                        onPress={() => alert('YOOOOOOOOOOOOO')}
                        title="MOHAMMED GENERATOR"
                        color="#FF0000"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                        onPress={() => props.navigation.goBack()}
                        title="go to settings" />
                </View>
                <StatusBar style="auto" />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A90FF',
        paddingTop: '5%',
        paddingLeft: '1%',

    },
    head: {
        color: '#FFFFFF',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '50%',
    },
});