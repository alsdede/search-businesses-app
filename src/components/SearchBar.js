import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather, 
    FontAwesome } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style = { styles.iconStyle}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputText}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}        
        />
        <FontAwesome name="barcode" style={styles.iconBarCodeStyle}/>
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop:15,
        backgroundColor:'rgba(0,0,0,0.1)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,  
        flexDirection: 'row', 
    },
    inputText:{
        flex:1,        
        fontSize: 18,
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15,
    },
    iconBarCodeStyle:{
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:15,
    },

});

export default SearchBar;