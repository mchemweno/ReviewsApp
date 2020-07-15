import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, } from 'react-native';
import CoverPhoto from '../components/CoverPhoto';
import Reviews from '../components/Reviews';
import Products from '../components/Products';
import Receipts from '../components/Receipts';
import Card from '../components/card';
import TitleText from '../components/TitleText';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';



const HomeScreen = props => {


    const [content, setContent] = useState(<Reviews />);


    const reviewsTabHandler = () => {
        setContent(<Reviews />)
    };

    const productTabHandler = () => {
        setContent(<Products />)
    };

    const receiptsTabHandler = () => {
        setContent(<Receipts />)
    };


    return (
        <View style={styles.screen}>

            <CoverPhoto />

            <Card style={styles.buttonCard}>
                <View style={styles.buttonView}>

                    <TouchableOpacity onPress={reviewsTabHandler} ><TitleText>REVIEWS</TitleText></TouchableOpacity>
                    <TouchableOpacity onPress={productTabHandler} ><TitleText>PRODUCTS</TitleText></TouchableOpacity>
                    <TouchableOpacity onPress={receiptsTabHandler} ><TitleText>RECEIPTS</TitleText></TouchableOpacity>

                </View>
            </Card>


            {content}


            <Card style={styles.bottomNav}>

                < MaterialIcons name="receipt" size={30} color="blue" />
                < MaterialIcons name="add" size={30} color="blue" />
                < MaterialIcons name="sms" size={30} color="blue" />
                < FontAwesome5 name="user-alt" size={24} color="blue" />

            </Card>



        </View>
    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        backgroundColor: '#fbfbfb'
    },

    buttonCard: {
        marginVertical: Dimensions.get('window').height / 80,
    },

    buttonView: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.85,
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },

    bottomNav: {
        position: 'absolute',
        bottom: Dimensions.get('window').width * 0.02,
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.45,
        justifyContent: 'space-between',
        borderRadius: 100,
        height: Dimensions.get('window').width * 0.14,
    }

});

export default HomeScreen;
