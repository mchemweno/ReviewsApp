import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import BodyText from '../components/BodyText';


const Reviews = props => {

    return (

        <View style={styles.reviews}>

            <BodyText>Geo: Great products</BodyText>

        </View>

    );

};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },

    reviews: {
        textAlign: 'left',
        width: Dimensions.get('window').width * 0.85,

    }

});

export default Reviews;