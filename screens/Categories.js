import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import CategoryListItem from '../components/CategoryListItem';
import Header from '../components/Header';
import { getMethod, postMethod } from "../utils/fetchData";

export default function Categories({navigation}) {
  Categories.navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: 
      () => 
      <Header 
        checkLogin={() => navigation.navigate('Login')} 
        user={navigation.state.params}
        settings={() => navigation.navigate('Settings')} 
      />,
      headerStyle: {backgroundColor: '#5fb8f4'},
  });

    const [categories, setCategories] = useState([]);
    //const navigation = useNavigation();

    useEffect(() => {
      const getProducts = async () => {
        let response = await getMethod("product")
        return response
    }
    getProducts()
        .then(res => {
            if (res.success) {
                // setProducts(res.products)
                // setProductsShow(res.products)
                console.log(res.products)
                setCategories(res.products)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <FlatList 
          data={categories}
          renderItem={({item}) => 
            <CategoryListItem 
                key={item._id}
                category={item}
                onPress={() => navigation.navigate('Category', {
                    categoryName: item.name,
                    categoryId: item.id,
                    product: item 
                })} 
                />
            }
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
