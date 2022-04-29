import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default Sports = (props) => {

    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    const [lib, setLib] = useState({ data: undefined, info: undefined, list: undefined })
    const [players, setPlayers] = useState([]);

    function gameList(ActiveGamemode) {
        fetch(`http://109.205.56.69:4000/live/:${ActiveGamemode}/:10/:10`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setInfo(json.slugSport.tournamentList)
                setPlayers(json.slugSport.tournamentList)

            })
    }
    useEffect(() => {
        fetch('http://109.205.56.69:4000/sports')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                console.log(json)
            })
        gameList('snooker')
    }, []);

    console.log(lib.list)
    return (
        <View style={styles.container} >
            <SafeAreaView style={styles.container}>
                {data.map(element => <TouchableOpacity key={element} onPress={() => gameList(element)} style={styles.element}>
                    <Text key={element} style={styles[element]}>{element}</Text>
                </TouchableOpacity>
                )}
                {info.map(element =>
                    <Text key={element.name}>{element.name}</Text>
                )}
                {info.map(element => { element.fixtureList.map(element => element.groups.map(element => element.markets.map(element => element.outcomes.map(element => console.log(element.name))))) }
                )}
                {/* {<View><Text>{info}</Text></View>} */}
                <StatusBar style="auto" />
            </SafeAreaView>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A90FF',
    },
    head: {
        color: '#FFFFFF',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '50%',
    },
    basketball: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    cricket: {
        color: '#FF0000',
    },
    fifa: {
        color: 'green'
    },
    tennis: {
        color: 'purple'
    }
});