import React, { useEffect, useState } from "react";

import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Card } from 'react-native-paper';

import 'react-svg-radar-chart/build/css/index.css';



export default function Insights({ navigation }) {
    const getURL = async () => {
        console.log("Navigating to insights")
        try {
            navigation.navigate("Insights");
        } catch (error) {
            console.error(error);
        }

    };

    const getURL1 = async () => {
        console.log("Navigating to insights")
        try {
            navigation.navigate("Badges");
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
                }}>Challenges</Text>
                <div style={{  }}>
                    <TouchableOpacity onPress={getURL1}>
                        <Image
                            source={require('../assets/Ldrbrd.png')}
                            style={{ height: '40px', width: '40px', left: '170px', }}
                        />
                    </TouchableOpacity>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", textAlign: 'center', marginTop: '10px', justifyContent: 'center' }}>


                <div style={{ justifyContent: 'center', flex: 1, boxShadow: '0px 0px 14px 3px #000;', width: '94%', height: '200px', marginLeft: '10px', marginBottom: '8px' }}>
                    <Card style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://png.pngtree.com/png-clipart/20200629/ourlarge/pngtree-stock-market-trend-analysis-chart-png-image_2267330.jpg')`
                    }}>
                        <Text style={styles.paragraph}>
                            Money Minter Challenge
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: '#fff',
                            textAlign: 'center',
                            marginLeft: '5px',
                            marginBottom: '15px'
                        }}>
                            3 days left
                        </Text>
                    </Card>
                </div>


                <div style={{ justifyContent: 'center', flex: 1, boxShadow: '0px 0px 14px 3px #000;', width: '94%', height: '200px', marginLeft: '10px', marginBottom: '8px' }}>
                    <Card style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-computer-statistics-finance-image_1270415.jpg')`
                    }}>
                        <Text style={styles.paragraph}>
                            Investor on zeneith
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: '#fff',
                            textAlign: 'center',
                            marginLeft: '5px',
                            marginBottom: '15px'
                        }}>
                            Upcoming
                        </Text>
                    </Card>
                </div>



                <div style={{ justifyContent: 'center', flex: 1, boxShadow: '0px 0px 14px 3px #000;', width: '94%', height: '200px', marginLeft: '10px', marginBottom: '8px' }}>
                    <Card style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-jingrong-business-flat-wind-h5-financial-growth-png-image_1268992.jpg')`
                    }}>
                        <Text style={styles.paragraph}>
                            Shopper vs Saver
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: '#fff',
                            textAlign: 'center',
                            marginLeft: '5px',
                            marginBottom: '15px'
                        }}>
                            Upcoming
                        </Text>
                    </Card>
                </div>

                <div style={{ justifyContent: 'center', flex: 1, boxShadow: '0px 0px 14px 3px #000;', width: '94%', height: '200px', marginLeft: '10px', marginBottom: '8px' }}>
                    <Card style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-pink-financial-trading-forex-2-5d-elements-image_1205332.jpg')`
                    }}>
                        <Text style={styles.paragraph}>
                            Travaler on a voyage
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: '#fff',
                            textAlign: 'center',
                            marginLeft: '5px',
                            marginBottom: '15px'
                        }}>
                            Upcoming
                        </Text>
                    </Card>
                </div>

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