import React from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native'

import SkiiImage from '../assets/skii.png'

function Order(props){
  const {order} = props
  console.log(order.product)
    return (
        <>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              {order.product.map((order, index) => {
                return (
                  <View style={styles.product} key={index}>
                    <Image style={styles.image} source={SkiiImage}/>
                    <View style={styles.content}>
                      <Text style={styles.heading}>{order.name}</Text>
                      <Text style={styles.quantity}>x {order.quantity}</Text>
                      <Text style={styles.price}>{order.price}.000</Text>
                    </View>
                  </View>
                )
              })}
                <View style={styles.total}>
                  <Text>
                    <Text>Thành tiền: </Text>
                    <Text style={styles.totalPrice}>{order.total}.000</Text>
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.detail}> 
                      Chi tiết
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </>
    )
}

export default Order

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    product: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    content: {
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
    heading: {
      fontSize: 16,
      fontWeight: '500',
    },
    price: {
      color: '#ccc',
    },
    image: {
      width: 64,
      height: 64,
      marginTop: 4,
    }, 
    total: {
      textAlign: 'right',
      paddingBottom: 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    totalPrice: {
      color: '#147efb',
      marginLeft: 8,
    },
    detail: {
      borderColor: 'green',
      borderWidth: 1,
      color: 'green',
      paddingHorizontal: 8,
      paddingVertical: 4
    }
})

