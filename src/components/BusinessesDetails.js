import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import nologo from '../../assets/nologo.jpeg';

const BusinessesDetails = ({ businesses }) => {
    return(<View style={styles.container}>
        {businesses.imaage_url !== (null || '') ?
         <Image source={{ uri: businesses.image_url }} style={styles.imageBusinesses} /> : <Image source = {nologo}/>}
        <Text style={styles.businessName}>{businesses.name}</Text>
        <Text>{businesses.rating} Stars, {businesses.review_count} Avaliações</Text>
        </View>);
};

const styles = StyleSheet.create({
    container: {
        marginLeft:10,
    },
    imageBusinesses:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5,
    },
    businessName: {
        fontWeight: 'bold',
        fontSize:16,

    }
});

export default BusinessesDetails;