import React, { useEffect, useState } from "react";

import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Card } from 'react-native-paper';

import 'react-svg-radar-chart/build/css/index.css';



export default function Insights({ navigation }) {
    const getURL = async () => {
        console.log("Navigating to insights")
        try {
            navigation.navigate("Challenges");
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div style={{}}>
            <div style={{
                display: 'flex',
                boxShadow: '1px 0 3px 0.5px #B8B8B8',
                position: 'fixed',
                top: 0,
                width: '100%',
                padding: '10px',
                height: '40px',
                zIndex: 1,
                paddingLeft: '20px',
                backgroundColor: 'white'
            }}>
                <Image source={require('../assets/logo.png')} style={{ height: '35px', width: '35px' }} />
                <Text style={{
                    fontSize: 25,
                    color: '#000',
                    fontWeight: '600',
                    marginLeft: '10px',
                }}>Financial Wellbeing</Text>
            </div>
            <br />
            <br />
            <br />
            <div style={{ margin: '10px 0px 0px 10px', display: 'flex', marginBottom: '10px' }}>
                <TouchableOpacity onPress={getURL}>
                    <Image
                        source={require('../assets/arrow_back.png')}
                        style={{ height: '20px', width: '20px', marginTop: '8px', marginRight: '10px' }}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 25,
                    color: '#000',
                    fontWeight: '500',
                }}>Badges</Text>
            </div>
            <div style={{ flex: 1, flexDirection: 'column', justifyContent: "center"}}>
                <Image source={require('../assets/Badgescreen.png')} style={{
                    width: '100%', height: '700px', 
                }} />
            </div>

        </div>

    );
}

const styles = StyleSheet.create({
    spyder: {
        backgroundColor: '#fff',
        margin: 'auto'
    },
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemVal: {
        fontWeight: '600',
        fontSize: 60,
        color: '#fff',
        paddingBottom: '15px'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        fontSize: 25,
        fontWeight: 500,
        color: '#fff',
        textAlign: 'center',
        marginLeft: '18px',
        paddingTop: '140px',
        height: '190px',
    },
});