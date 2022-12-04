import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native'

import {GlobalState} from '../context/GlobalState';
import Order from '../components/Order';
import TDTU from '../assets/logo_tdtu.jpg';

export default function OrdersScreen({navigation}){
    OrdersScreen.navigationOptions = {
        title: 'Orders'
    };

    const [orders, setOrders] = useState([]);
    const state = useContext(GlobalState);
    const isLogin = state.UserAPI.login[0];

    console.log("Is Login Order: ", isLogin)
    // if(!isLogin){
    //   navigation.navigate('Login')
    //   return
    // }

    useEffect(() => {
      setOrders([
        {
          id: 1,
          product: [
            {
              id: 1,
              name: 'Dụng cụ trượt tuyết siêu tốt',
              price: 500,
              quantity: 2,
            },
            
          ],
          total: 800,
        },
        {
          id: 2,
          product: [
            {
              id: 3,
              name: 'Dụng cụ trượt tuyết siêu tốt',
              price: 500,
              quantity: 2,
            },
            {
              id: 4,
              name: 'Dụng cụ trượt tuyết siêu rẻ',
              price: 200,
              quantity: 3,
            },
          ],
          total: 700,
        },
    ])
    }, [])
 
    return (
      (isLogin ? (
      <>
        <View style={styles.header}>
          <Text>Chờ xác nhận</Text>
          <Text>Đang giao</Text>
          <Text>Đã giao</Text>
          <Text>Đã hủy</Text>
          <Text style={styles.line}></Text>
        </View>
        <FlatList 
          data={orders}
          renderItem={({item}) => 
            <Order 
                order={item}
            />
            }
          keyExtractor={item => item.id}
        />
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
    header:{
      flexDirection: 'row',
      backgroundColor: '#FFF',
      justifyContent: 'space-around',
      width: '100%',
      paddingVertical: 12,
      cursor: 'pointer',
      position: 'relative',
      marginBottom: 8
    },
    line: {
      position: 'absolute',
      left: 10,
      bottom: 0,
      width: 110,
      height: 1,
      backgroundColor: 'green',
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
})