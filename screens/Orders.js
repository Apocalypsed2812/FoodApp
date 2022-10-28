import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Text, View, StyleSheet, FlatList} from 'react-native'

import Order from '../components/Order';

export default function OrdersScreen(){
  OrdersScreen.navigationOptions = {
        title: 'Orders'
    };

    const [orders, setOrders] = useState([]);

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
      <>
        <View style={styles.header}>
          <Text>Chờ xác nhận</Text>
          <Text>Đang giao</Text>
          <Text>Đã giao</Text>
          <Text>Đã hủy</Text>
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
    },
})