import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const BusinessesShowScreen = ({ navigation }) => {
    const [ business, setBusiness ] = useState(null);
    const idBusinesses = navigation.getParam('id');
    

    const getBusinesses = async (idBusinesses) => {
        const response = await yelp.get(`/${idBusinesses}`);
        setBusiness(response.data);
    }
    useEffect(() => {
        getBusinesses(idBusinesses);        
    }, [])

    if(!business){
        return null;
    }
    return (
        <View>
        <Text>{business.name}</Text>
        <FlatList 
        data={business.photos}
        keyExtractor={(photo)=> photo}
        renderItem={({item}) => 
        <Image style={styles.imageBusiness}source={{ uri: item }}/>}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageBusiness:{
        height: 200,
        width:300,
    }
});

export default BusinessesShowScreen;