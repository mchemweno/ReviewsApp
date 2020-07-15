import React from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Card from '../components/card'
import BodyText from '../components/BodyText';
import { AntDesign } from '@expo/vector-icons';



const Products = props => {
    return (
        
            <View style={styles.productView}>


                <Card style={styles.product}>

                    <Image
                        source={require('../assets/envy.png')}
                        style={styles.image}
                        resizeMode="cover" />

                    <View style={styles.productDetails}>

                        <BodyText>HP Envy 13"</BodyText>
                        <BodyText>Intel Core i7</BodyText>
                        <BodyText>256gb ssd</BodyText>
                        <BodyText>8GB Ram</BodyText>
                        <BodyText>85,000</BodyText>

                    </View>

                    <View style={styles.prodicons}>

                        <AntDesign name="delete" size={24} color="red" />
                        <AntDesign name="edit" size={24} color="blue" />

                    </View>

                </Card>




            </View>
        
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
        height: Dimensions.get('window').width * 0.3,
    },

    productDetails: {
        marginHorizontal: 10
    },

    prodicons: {
        paddingHorizontal: Dimensions.get('window').width * 0.25,
        paddingVertical: Dimensions.get('window').width * 0.05,
        justifyContent: 'space-between'
    },

    scroll: {
        width: Dimensions.get('window').width * 0.95,

    }

});

export default Products;