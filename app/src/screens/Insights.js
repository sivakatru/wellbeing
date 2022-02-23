import React, { useEffect, useState } from "react";

import { StyleSheet, ScrollView, View, Text } from "react-native";
import { FlatGrid } from 'react-native-super-grid';


import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';


export default function Insights({ navigation }) {

    const data = [
        {
            data: {
                battery: 0.7,
                design: .46,
                useful: 0.9,
                speed: 0.67,

            },
            meta: { color: 'blue' }
        }
    ];

    const captions = {
        // columns
        battery: 'Battery Capacity',
        design: 'Design',
        useful: 'Usefulness',
        speed: 'Speed',
    };

    const [items, setItems] = React.useState([
        { name: 'Shopping', code: '#1abc9c', val: '10' },
        { name: 'Travel', code: '#2ecc71', val: '20' },
        { name: 'Investments', code: '#3498db', val: '30' },
        { name: 'Misc', code: '#9b59b6', val: '40' },
    ]);

    return (
        <div style={{ backgroundColor: 'White', display: "flex", flexDirection: "column", textAlign: 'center' }}>
            <div style={{ marginTop: '20px' }}>
                <div>
                    <Text style={{
                        fontSize: 25,
                        color: '#000',
                    }}><b>Insights</b></Text>
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
                }}>You are a <b>SPENDER</b></Text>
            </div>
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