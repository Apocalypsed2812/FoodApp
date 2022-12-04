import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
//import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
// import { storage } from '~/firebase.js';
// import app from '../firebase.js';
import AsyncStorage from "@react-native-async-storage/async-storage";

import TDTU from '../assets/logo_tdtu.jpg'
import banner from '../assets/banner.jpg'
import { getMethod, postMethod } from "../utils/fetchData";
import {GlobalState} from '../context/GlobalState'
import Home from '../components/Home';
import Header from '../components/Header';

export default function HomeScreen({navigation}){
    const state = useContext(GlobalState)
    const [isLogin, setIsLogin] = state.UserAPI.login;
    // console.log("Is Login: ", isLogin);

    const [products, setProducts] = state.ProductAPI.products;
    const [categorys, setCategorys] = state.CategoryAPI.categorys;
    const [foodStores, setFoodStores] = state.FoodStoreAPI.foodStores;
    const [user, setUser] = state.UserAPI.user;
    // console.log(products)

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

    const handleProductDetail = () => {
      navigation.navigate('Login')
    }

    HomeScreen.navigationOptions = ({ navigation, screenProps }) => ({
          headerTitle: 
          () => 
          <Header 
            checkLogin={() => navigation.navigate('Login')} 
            // user={navigation.state.params}
            settings={() => navigation.navigate('Settings')} 
          />,
          headerStyle: {backgroundColor: '#5fb8f4'},
      });

      return (
          <ScrollView>
            <View style={styles.container}>
              <Image style={styles.image} source={banner}/>
              {user ? <Text>{user.username}</Text> : <Text>Nothing</Text>}
              <View style={styles.categories__row}>
                  {categorys.map((item, index) => (
                      <TouchableOpacity style={styles.categories__col_3} key={index} onPress={() => {navigation.navigate("Category", {categoryName: item.name})}}>
                          <View style={styles.category}>
                              <Image style={styles.category__image} source={{uri: item.image_url}}/>
                              <Text style={styles.category__text}>{item.name}</Text>
                          </View>
                      </TouchableOpacity> 
                  ))} 
                  {/* <TouchableOpacity style={styles.categories__col_3}>
                          <View style={styles.category}>
                              <Image style={styles.category__image} source={TDTU}/>
                              <Text style={styles.category__text}>Salad</Text>
                          </View>
                  </TouchableOpacity>  */} 
              </View>

              <View style={styles.eat__today}>
                  <Text style={styles.eat__today_title}>Hôm nay ăn gì ?</Text>
                  <ScrollView
                  horizontal={true}
                  >
                    {products.map((item, index) => (
                      <TouchableOpacity style={styles.product} key={index} onPress={() => {navigation.navigate("ProductDetail", {product: item})}}>
                        <View style={{flex: 2}}>
                          <Image source={{uri: item.image_url}} style={styles.product_image}/>
                        </View>
                        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                          <Text>{item.name}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                    {/* <TouchableOpacity style={styles.product} onPress={() => {navigation.navigate("ProductDetail")}}>
                        <View style={{flex: 2}}>
                          <Image source={TDTU} style={styles.product_image}/>
                        </View>
                        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                          <Text>Salad</Text>
                        </View>
                    </TouchableOpacity> */}
                  </ScrollView>
              </View>

              <View style={styles.eat__impress}>
                <Text style={styles.eat__impress_title}>Quán ăn nổi bật</Text>
                <View style={styles.categories__row}>
                  {foodStores.map((item, index) => (
                    <TouchableOpacity style={styles.categories__col_12} key={index} onPress={() => {navigation.navigate('FoodStore', {foodStore: item})}}>
                      <View style={styles.eat__impress__product}>
                          <Image style={styles.eat__impress__image} source={{uri: item.image_url}} />
                          <View style={styles.eat__impress__text}>
                            <Text style={styles.eat__impress__name}>{item.name}</Text>
                            <Text style={styles.eat__impress__des}>$$$ Ngon chuẩn Việt</Text>
                            <Text style={styles.eat__impress__trans}>Giao hàng trong 17 phút</Text>
                            <Text style={styles.eat__impress__trans}>Giảm đến 35K cho đơn hàng</Text>
                          </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                  {/* <TouchableOpacity style={styles.categories__col_12} onPress={() => {navigation.navigate('FoodStore')}}>
                      <View style={styles.eat__impress__product}>
                          <Image style={styles.eat__impress__image} source={TDTU} />
                          <View style={styles.eat__impress__text}>
                            <Text style={styles.eat__impress__name}>Bún đậu mắm tôm</Text>
                            <Text style={styles.eat__impress__des}>$$$ Ngon chuẩn Việt</Text>
                            <Text style={styles.eat__impress__trans}>Giao hàng trong 17 phút</Text>
                            <Text style={styles.eat__impress__trans}>Giảm đến 35K cho đơn hàng</Text>
                          </View>
                      </View>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          </ScrollView>
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
  }
})
