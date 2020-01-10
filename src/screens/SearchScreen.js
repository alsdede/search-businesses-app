import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';

import useBusinesses from '../hooks/useBusinesses';

import BusinessesList from '../components/BusinessesList';

const SearchScreen = () => {
    const [term, setTerm ] = useState('');
    const [searchApi, businesses, errorMessage] = useBusinesses();
    
    const filterBusinessesByPrice =(price) => {
        return businesses.filter(businesses=> {
            return businesses.price === price;
        })
    }
    return (<>
        <SearchBar term={term}
         onTermChange={setTerm}
         onTermSubmit={()=>searchApi(term)} />        
        {errorMessage ? <Text>{errorMessage}</Text> : null} 
        <Text style={styles.titleStyle}>Estabelecimentos encontrados: {businesses.length}</Text>
        <ScrollView>
        <BusinessesList         
        businesses={filterBusinessesByPrice('$')}
        title="Em conta"
        />
        <BusinessesList 
        businesses={filterBusinessesByPrice('$$')} 
        title = "Cabe no bolso"
        />
        <BusinessesList 
        businesses={filterBusinessesByPrice('$$$')} 
        title=" Caros"
        />
        </ScrollView>
    </>)
}

const styles = StyleSheet.create({
    titleStyle:{
       marginLeft:10,
       marginBottom:5,
   }
});

export default SearchScreen;