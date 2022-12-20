import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import banner from '../assets/banner.jpg'
// import { getMethod, postMethod } from "../utils/fetchData";
import {GlobalState} from '../context/GlobalState'
import Header from '../components/Header';

export default function SearchScreen({navigation}){
    const state = useContext(GlobalState)
    const [isLogin, setIsLogin] = state.UserAPI.login;
    // console.log("Is Login: ", isLogin);

    const [products, setProducts] = state.ProductAPI.products;
    const [categorys, setCategorys] = state.CategoryAPI.categorys;
    const [foodStores, setFoodStores] = state.FoodStoreAPI.foodStores;
    const [productsShow, setProductsShow] = state.ProductAPI.productsShow;
    const [user, setUser] = state.UserAPI.user;

    useEffect(() => {
      setProductsShow([])
    }, [])

    SearchScreen.navigationOptions = ({ navigation, screenProps }) => ({
          headerTitle: 
          () => 
          <Header 
            checkLogin={() => navigation.navigate('Login')} 
            // user={navigation.state.params}
            settings={() => navigation.navigate('Settings')} 
          />,
          headerStyle: {backgroundColor: '#5fb8f4'},
      });

      console.log("ProductShow là: ", productsShow.length)

      return (
          (productsShow.length > 0
            ? 
            (
              <ScrollView>
                <View style={styles.container}>
                  <Image style={styles.image} source={banner}/>
                  <View style={styles.categories__row}>
                    {productsShow.map((item, index) => (
                      <TouchableOpacity style={styles.product__col_6} key={index} onPress={() => {navigation.navigate("ProductDetail", {product: item})}}>
                          <View style={styles.product__search}>
                              <Image style={styles.product__image_search} source={{uri: item.image_url}}/>
                              <Text style={styles.product__title}>{item.name}</Text>
                              <Text style={styles.product__price}>{item.price} đ</Text>
                              {/* <Text style = {styles.product__btn} onPress={() => handleAddToCart(item._id)}>
                                  Thêm
                              </Text> */}
                          </View>
                      </TouchableOpacity> 
                  ))} 
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.combackHome}>Quay về trang chủ</Text>
                  </TouchableOpacity>
                       
                  </View>
                </View>
              </ScrollView>
            ) 
            : 
            (
              <Text>Không tìm thấy món ăn</Text>
            ))
      )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: '#fff',
    // minHeight: 1000,
  },
  image: {
    width: '100%',
    height: 300,
  },
  categories__row: {
    //height: 400,
    flex: 1,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 16,
    flexDirection: 'row',
    marginHorizontal: -4,
    paddingLeft: 8,
  },
  categories__row_horizontal: {
    width: '100%',
    display: 'flex',
    // flex: 1,
    // marginTop: 16,
    flexDirection: 'row',
    marginHorizontal: -4,
  },
  scrollview_horizontal: {
    width: '100%',
  },
  categories__col_3: {
    width: '25%',
    height: 100,
    paddingHorizontal: 4,
    marginBottom: 20,
  },
  categories__col_horizontal:{
    width: '30%',
    height: 100,
    paddingHorizontal: 4,
    marginBottom: 20,
  },
  categories__col_12: {
    width: '100%',
    height: 130,
    paddingHorizontal: 4,
    marginBottom: 20,
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    borderColor: '#ccc',
    borderWidth: 1,
  },
  eat__impress:{
    height: 1000.
  },
  eat__impress__product: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    height: '100%',
    marginTop: 10,
  },
  category__image: {
    width: '100%',
    height: '60%',
  },
  eat__impress__image: {
    width: 84,
    height: 84,
  },
  eat__today: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  eat__today_title:{
    color: '#333',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 12,
  },
  eat__impress:{
    marginTop: 16,
    paddingHorizontal: 12,
  },
  eat__impress_title:{
    color: '#333',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 8,
  },
  eat__impress__text: {
    height: '100%',
    marginLeft: 12,
    display: 'flex',
    justifyContent: 'center'
  },
  eat__impress__name: {
    fontSize: 20,
    // fontWeight: 200,
  },
  eat__impress__des: {
    fontSize: 16,
    color: '#ccc'
  },
  eat__impress__trans: {
    fontSize: 17,
    // fontWeight: 10,
  },
  product:{
    height: 130,
    width: 130,
    marginRight: 16,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  product_image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  product__search: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    paddingVertical: 16,
  },
  product__image_search: {
    // flex: 1,
    // width: null,
    // height: null,
    // resizeMode: 'cover',
    width: 100,
    height: 64,
  },
  product__title: {
      fontSize: 20,
      marginVertical: 16,
      height: 30,
  },
  product__price: {

  },
  product__btn: {
    width: '100%',
    backgroundColor: 'transparent',
    color: 'green',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 16,
    marginVertical: 16,
    textAlign: 'center',
    paddingVertical: 4,
  },
  combackHome: {
    width: '100%',
    textAlign: 'center',
  },
})
