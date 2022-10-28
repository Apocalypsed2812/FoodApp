import React from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native'

import SkiiImage from '../assets/skii.png'

function Order(props){
  const {order} = props
  console.log(order.product)
    return (
        <>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              {order.product.map((order, index) => {
                return (
                  <View style={styles.product} key={index}>
                    <Image style={styles.image} source={SkiiImage}/>
                    <View style={styles.content}>
                      <Text style={styles.heading}>{order.name}</Text>
                      <Text style={styles.quantity}>x {order.quantity}</Text>
                      <Text style={styles.price}>{order.price}</Text>
                    </View>
                  </View>
                )
              })}
                <View style={styles.total}>
                  <Text>Thành tiền: 
                    <Text style={styles.totalPrice}>{order.total}K</Text>
                  </Text>
                </View>
            </View>
          </View>
        </TouchableOpacity>
        </>
    )
}

export default Order

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
        marginTop: 8,
        flex: 1,
        backgroundColor: '#FFF',
        width: '100%',
    },
    product: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    content: {
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
    image: {
      width: 64,
      height: 64,
      marginTop: 4,
    }, 
    total: {
      textAlign: 'right',
      padding: 8,
    },
    totalPrice: {
      color: '#147efb',
      marginLeft: 4,
    },
})

