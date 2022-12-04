import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';

import ProductDetailItem from '../components/ProductDetailItem';
import { getMethod, postMethod } from "../utils/fetchData";

export default function ProductDetail({navigation, product}) {
    ProductDetail.navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('categoryName')
        };
    };

    const userLogin = false
    const handleAddToCart = () => {
        if(!userLogin){
        //console.log(userLogin)
        Alert.alert(
            "Error",
            "Vui lòng đăng nhập để thực hiện chức năng này",
            [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
        }
    }
    return (
        <ProductDetailItem product={product}/>
    );

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper:{
    flex: 1,
    paddingHorizontal: 8
  }
});
