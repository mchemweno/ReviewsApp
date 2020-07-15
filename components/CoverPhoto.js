import React from 'react';
import { StyleSheet, Image, View, Dimensions, Text, TouchableOpacity } from 'react-native';

import Card from '../components/card';
import { FontAwesome5 } from '@expo/vector-icons';

const CoverPhoto = props => {
    return (

        <View>

            <Card style={styles.imageCard}>

                <Image
                    source={require('../assets/imgss.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />

            </Card>

        </View>
    );

};


const styles = StyleSheet.create({

    imageCard: {
        padding: 5,
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').width * 0.6,
        borderColor: 'black',
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },

});

export default CoverPhoto;