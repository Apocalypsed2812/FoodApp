import React, {useEffect, useState, useContext} from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native'

import TDTU from '../assets/logo_tdtu.jpg'
import { getMethod, postMethod } from "../utils/fetchData";
import {GlobalState} from '../context/GlobalState'

function Home({handleProductDetail}){
    // const state = useContext(GlobalState)
    // const [products, setProducts] = state.ProductAPI.products;
    // const [categorys, setCategorys] = state.ProductAPI.categorys;
    // const [foodStores, setFoodStores] = state.ProductAPI.foodStores;
    // console.log(products)

    // const handleProductDetail = () => {
    //   navigation.navigate('Login')
    // }
    // useEffect(() => {
    //   const getProducts = async () => {
    //     let response = await getMethod("product")
    //     return response
    // }
    // getProducts()
    //     .then(res => {
    //         if (res.success) {
    //             console.log(res.products)
    //             setProducts(res.products)
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    return (
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.image} source={TDTU}/>
            <View style={styles.categories__row}>
                {/* {categorys.map((item, index) => (
                    <TouchableOpacity style={styles.categories__col_3} key={index}>
                        <View style={styles.category}>
                            <Image style={styles.category__image} source={TDTU}/>
                            <Text style={styles.category__text}>{item.name}</Text>
                        </View>
                    </TouchableOpacity> 
                  ))}  */}
            </View>

            <View style={styles.eat__today}>
                <Text style={styles.eat__today_title}>Hôm nay ăn gì ?</Text>
                <ScrollView
                horizontal={true}
                >
                  {/* {products.map((item, index) => (
                    <TouchableOpacity style={styles.product} key={index}>
                      <View style={{flex: 2}}>
                        <Image source={item.image_url} style={styles.product_image}/>
                      </View>
                      <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                        <Text>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  ))} */}
                </ScrollView>
            </View>

            <View style={styles.eat__impress}>
              <Text style={styles.eat__impress_title}>Quán ăn nổi bật</Text>
              <View style={styles.categories__row}>
                {/* {foodStores.map((item, index) => (
                  <TouchableOpacity onPress={handleProductDetail} style={styles.categories__col_12}>
                    <View style={styles.eat__impress__product}>
                        <Image style={styles.eat__impress__image} source={item.image_url} />
                        <View style={styles.eat__impress__text}>
                          <Text style={styles.eat__impress__name}>{item.name}</Text>
                          <Text style={styles.eat__impress__des}>$$$ Ngon chuẩn Việt</Text>
                          <Text style={styles.eat__impress__trans}>Giao hàng trong 17 phút</Text>
                          <Text style={styles.eat__impress__trans}>Giảm đến 35K cho đơn hàng</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                ))} */}
              </View>
            </View>
          </View>
        </ScrollView>
    )
}

export default Home

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
      //fontWeight: 600,
      fontSize: 20,
      marginBottom: 12,
    },
    eat__impress:{
      marginTop: 16,
      paddingHorizontal: 12,
    },
    eat__impress_title:{
      color: '#333',
      //fontWeight: 600,
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
    }
})
