import React, {Component} from "react";
import {Text} from 'react-native'

import ProductDetail from '../components/ProductDetail';

export default function ProductDetailScreen({navigation}){
  ProductDetailScreen.navigationOptions = {
        title: 'ProductDetail'
    }
     
    return (
      <ProductDetail 
        clickRegister={() => navigation.navigate('Register')} 
      />
    )
}