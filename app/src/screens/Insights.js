import React, { useEffect, useState } from "react";

import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import Button from "../components/Button";

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';


export default function Insights({ navigation }) {

    const data = [
        {
            data: {
                Shopping: 0.32,
                Investments: 0.9,
                Loans: 0.3,
                Travel: 0.2,
                Healthcare: 0.15,
                misc: 0.08
            }, meta: { color: 'blue' }
        }
    ];

    const captions = {
        // columns
        Shopping: 'Shopping',
        Investments: 'Investments',
        Healthcare: 'Healthcare',
        Travel: 'Travel',
        Healthcare: 'Healthcare',
        Loans: 'Loan',
        misc: 'Misc'
    };

    const [items, setItems] = React.useState([
        { name: 'Investments', code: '#3498db', val: '40' },
        { name: 'Shopping', code: '#1abc9c', val: '20' },
        { name: 'Travel', code: '#2ecc71', val: '10' },
        { name: 'Loans', code: '#16a085', val: '20' },
        { name: 'Healthcare', code: '#34495e', val: '15' },
        { name: 'Misc', code: '#9b59b6', val: '10' },
    ]);

    const getURL = async () => {
        console.log("Navigating to challenges")
        try {
            navigation.navigate("Challenges");
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div style={{ backgroundColor: 'White' }}>
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
                <Image source={require('../assets/logo.png')} style={{ height: '35px', width: '35px', }} />
                <Text style={{
                    fontSize: 25,
                    color: '#000',
                    fontWeight: '600',
                    marginLeft: '10px',
                }}>Financial Wellbeing</Text>
                <div style={{ marginBottom: '100px' }}>
                    <TouchableOpacity onPress={getURL}>
                        <Image
                            source={require('../assets/Chl.jpg')}
                            style={{ height: '37px', width: '50px', marginTop: '8px', marginRight: '10px', left: '70px', }}
                        />
                    </TouchableOpacity>
                </div>

            </div>
            <br />
            <br />
            <br />
            <div style={{ backgroundColor: 'White', display: "flex", flexDirection: "column", textAlign: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                    <div>
                        <Text style={{
                            fontSize: 25,
                            color: '#000',
                            fontWeight: '500',
                        }}>Personality Insight</Text>
                    </div>
                </div>
                <div>
                    <RadarChart
                        captions={captions}
                        data={data}
                        size={300}
                        style={styles.spyder}
                    />
                </div>
                <div>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        fontWeight: '500',
                    }}>You are an <b>Investor</b></Text>
                </div>
                {/* <Button mode="contained" onPress={getURL}>
                    Get Onboard
                </Button> */}
                <div>
                    <FlatGrid
                        itemDimension={130}
                        data={items}
                        style={styles.gridView}
                        spacing={10}
                        renderItem={({ item }) => (
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                <Text style={styles.itemVal}>{item.val}%</Text>
                                <Text style={styles.itemName}>{item.name}</Text>
                            </View>
                        )}
                    />
                </div>
            </div >
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
});