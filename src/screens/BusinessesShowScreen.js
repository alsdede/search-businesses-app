import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import { Rating, AirbnbRating } from 'react-native-elements';
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
        <FlatList 
        horizontal
        data={business.photos}
        keyExtractor={(photo)=> photo}
        renderItem={({item}) => 
        <Image style={styles.imageBusiness}source={{ uri: item }}/>}/>
        <Text style={styles.titleBusiness}>{business.name}</Text>     
        <Rating
        type='star'
        imageSize={30}
        readonly
        startingValue={business.rating}
        style={styles.rating}      
        />
        </View>
    )
}

const styles = StyleSheet.create({
   
    imageBusiness:{
        
        height: 200,
        width:300,
        marginLeft:15,
        marginBottom:30,
    },
    titleBusiness:{
        fontSize:30,
        marginLeft:15,
    },
    rating:{
        marginRight:200,
        paddingLeft:10 ,
        
    }
});

export default BusinessesShowScreen;