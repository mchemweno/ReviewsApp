import React from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';

import Card from '../components/card';
import BodyText from '../components/BodyText';

const Products = props => {
    return (
        <TouchableOpacity>

            <View style={styles.productView}>

                <Card style={styles.product}>

                    <Image
                        source={require('../assets/15.jpg')}
                        style={styles.image}
                        resizeMode="cover" />

                    <View style={styles.receiptDetails}>

                        <BodyText>Georgiadis Imbaya</BodyText>
                        <BodyText>364738254g</BodyText>
                        <BodyText>HP 15</BodyText>
                        <BodyText>8GB Ram</BodyText>
                        <BodyText>512GB hdd</BodyText>

                    </View>

                    <View style={styles.receiptDetails}>

                        <BodyText>core i7</BodyText>
                        <BodyText>15-01-2919</BodyText>
                        <BodyText>1 year warranty</BodyText>
                        <BodyText>Ksh 59,000</BodyText>

                    </View>

                </Card>

            </View>

        </TouchableOpacity>

    );

};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },

    productView: {
        textAlign: 'left',
        width: Dimensions.get('window').width * 0.95,
    },

    product: {
        padding: 5,
        flexDirection: 'row',
        height: Dimensions.get('window').width * 0.3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 3
    },

    image: {
        width: Dimensions.get('window').width * 0.35,
        height:Dimensions.get('window').width * 0.3,
        borderRadius: 10
    },

    receiptDetails: {
        marginHorizontal: 10
    }

});

export default Products;