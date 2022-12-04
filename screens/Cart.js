import React, {useState, useContext, useEffect} from "react";
import axios from 'axios';
import { Text, FlatList, StyleSheet, View, Button, Image, ScrollView, ToastAndroid } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import TDTU from '../assets/logo_tdtu.jpg';
import { getMethod, postMethod } from "../utils/fetchData";
import {GlobalState} from '../context/GlobalState';

export default function CartScreen({navigation}){
    const state = useContext(GlobalState);
    const isLogin = state.UserAPI.login[0];
    const [cart, setCart] = state.UserAPI.cart;
    const [cartList, setCartList] = useState([]);
    const globalProducts = state.ProductAPI.products[0];

    console.log("Is Login Cart: ", isLogin)
    // if(!isLogin){
    //   // navigation.navigate('Login')
    //   ToastAndroid.show('Vui lòng đăng nhập cart để tiếp tục', ToastAndroid.SHORT)
    //   return
    // }

    useEffect(() => {
      const getCart = async () => {
          const res = await getMethod('get-user');
          return res;
      };
      getCart()
          .then((res) => {
              if (res.success) {
                  setCart(res.user.cart)
                  setCartList(res.user.cart);
              } else {
                  // Swal.fire({
                  //     title: 'Error',
                  //     text: res.message,
                  //     icon: 'error',
                  // });
              }
          })
          .catch((err) => {
              console.log(err);
          });
    }, []);

    let products = [];
    if (cart.length > 0) {
        // setCartProduct(true);
        globalProducts.forEach((product) => {
            cart.forEach((p) => {
                console.log(p);
                if (p.id === product._id) {
                    products.push({ ...product, quantity: p.quantity });
                }
            });
        });
    }
    console.log("Cart la: ", cart)
    console.log("CartList la: ", cartList)
    console.log("Products la: ", products)

    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += Math.floor((product.price - (product.sale / 100) * product.price) * product.quantity);
    });

    const handleDelete = (id) => {
      console.log("ID DELETE IS: ", id)
      postMethod('delete-product', { product_id: id })
          .then((res) => {
              if (res.success) {
                  setCart(res.user.cart);
                  setCartList(res.user.cart);
                  ToastAndroid.show("Xóa sản phẩm khỏi giỏ hàng thành công", ToastAndroid.SHORT)
              } else {
                  ToastAndroid.show(res.message, ToastAndroid.SHORT)
              }
          })
          .catch((err) => {
              console.log(err);
          });
    };

    const handleChangeQuantity = (product, handle) => {
      if (product.quantity === 1 && handle === "descrease"){ 
        ToastAndroid.show("Số lượng khổng thể bằng 0", ToastAndroid.SHORT)
        return
      };
      postMethod("change-quantity", { product_id: product._id, handle })
          .then((res) => {
              if (res.success) {
                  setCart(res.user.cart);
                  setCartList(res.user.cart);
              } else {
                ToastAndroid.show(res.message, ToastAndroid.SHORT)
              }
          })
          .catch((err) => {
              console.log(err);
          });
    };

    CartScreen.navigationOptions = {
      title: 'Cart'
    };
    
    return ( 
        (isLogin ? (
          <>
          <ScrollView>
          <View style={styles.product__row}>
              {products.map((item, index) => (
                <View style={styles.product__col_12} key={index}>
                    <View style={styles.product}>
                        <View>
                            <View style={{flex: 2}}>
                                <Text style={styles.product__title}>{item.name}</Text>
                                <Text style={styles.product__price}>{item.price} đ</Text>
                                <Text style={styles.product__delete} onPress={() => handleDelete(item._id)}>
                                    <FontAwesome name="trash-o" size={20} color="red" />
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flex: 2}}>
                                <Image style={styles.product__image} source={{uri: item.image_url}}/>
                            </View>
                            <View style={styles.product__quantity}>
                              <Text style={styles.quantity__sub} onPress={() => handleChangeQuantity(item, "descrease")}>-</Text>
                              <Text style={styles.quantity}>{item.quantity}</Text>
                              <Text style={styles.quantity__add} onPress={() => handleChangeQuantity(item, "inscrease")}>+</Text>
                            </View>
                        </View>
                    </View>
                </View> 
              ))} 
          </View>
          </ScrollView>
          <View style={styles.total}>
            <Text style={styles.totalPrice}>Tổng tiền: {totalPrice}</Text>
            <Button style={styles.button} title='Đặt hàng'/>
          </View>
          </>
        ) : (
          <View style={styles.is__login}>
            <Image style={styles.is__login_img} source={TDTU}/>
            <Text>Vui lòng đăng nhập để sử dụng tính năng này</Text>
            <Text style={styles.is__login_direct} onPress={() => navigation.navigate('Login')}>Đăng nhập</Text>
          </View>
        ))
    )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  total:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 30,
    paddingVertical: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  totalPrice: {
    fontSize: 16,
    color: 'blue'
  },
  button: {
    fontSize: 16,
    color: 'blue'
  },
  product__row: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 16,
    flexDirection: 'row',
    marginHorizontal: -4,
    paddingLeft: 8,
    marginBottom: 80,
  },
  product__col_12: {
      width: '100%',
      height: 150,
      paddingHorizontal: 4,
      marginBottom: 4,
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  product__image: {
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
      width: 250,
      height: 30,
  },
  product__price: {

  },
  product__delete: {
    width: 40,
    fontSize: 20,
    marginTop: 8,
    color: 'red'
  },
  product__quantity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  quantity:{
    marginHorizontal: 16,
    fontSize: 14,
    lineHeight: 24
  },
  quantity__add: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 9999,
    width: 30,
    height: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'green',
  },
  quantity__sub: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 9999,
    width: 30,
    height: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'green',
  },
  is__login: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  is__login_direct: {
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
  },
  is__login_img:{
    width: 100,
    height: 100,
  }
});