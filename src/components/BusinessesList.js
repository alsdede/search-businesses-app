import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import BusinessesDetails from './BusinessesDetails';


const BusinessesList = ({ title, businesses,navigation }) => {
    if(!businesses.length){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>            
            <FlatList
            horizontal
            showsHorizontalScrollIndicator= {false}
            data={businesses}
            keyExtractor={(businesses)=> businesses.id}
            renderItem={({item}) =>{
            return (<TouchableOpacity onPress={()=>navigation.navigate('BusinessesShow',{id: item.id})}>
                <BusinessesDetails businesses={item}/>
            </TouchableOpacity>
            )}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
    },

    titleStyle:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:10,
        marginBottom:5,
       } 
});

export default withNavigation(BusinessesList);