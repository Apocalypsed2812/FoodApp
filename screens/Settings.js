import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useContext } from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView, Modal } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import {GlobalState} from '../context/GlobalState'
import { postMethod } from "../utils/fetchData";
import { TOKEN_NAME } from "../credentials";
import TDTU from '../assets/logo_tdtu.jpg';

export default function SettingsScreen({navigation}){
    const state = useContext(GlobalState)
    const [isLogin, setIsLogin] = state.UserAPI.login;
    const [user, setUser] = state.UserAPI.user
    const [productsShow, setProductsShow] = state.ProductAPI.productsShow;
    
    const handleLogOut = async () => {
      await AsyncStorage.removeItem(TOKEN_NAME)
      // console.log("Await after remote item: ", await AsyncStorage.getItem(TOKEN_NAME))
      setIsLogin(false)
      setUser(null)
      navigation.navigate('Login')
    }

    const handleCart = () => {
      navigation.navigate('Cart')
    }

    const handleOrder = () => {
      navigation.navigate('Orders')
    }

    const handleHome = () => {
      navigation.navigate('Home')
    }

    const handleChangePassword = () => {
      navigation.navigate('ChangePassword')
    }

    SettingsScreen.navigationOptions = {
        title: 'Settings'
    }

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const handleChangePhone = (name, value) => {
      setPhone(value)
    }

    const handleChangeEmail = (name, value) => {
      setEmail(value)
    }

    const handleChangeInfo = () => {
      if (phone.trim() === "") {
          ToastAndroid.show("S??? ??i???n tho???i kh??ng ???????c tr???ng", ToastAndroid.SHORT)
          return;
      }
      if (email.trim() === "") {
        ToastAndroid.show("Email kh??ng ???????c tr???ng", ToastAndroid.SHORT)
        return;
      }

      setModalVisible(false)
      setPhone("")
      setEmail("")

      let body = {
        id: user._id,
        phone,
        email,
      }
      postMethod("change-info", body)
          .then((res) => {
              if (res.success) {
                console.log(res)
                setUser(res.user)
              } else {
                ToastAndroid.show(res.message, ToastAndroid.SHORT)
              }
          })
          .catch((err) => {
              console.log(err);
          });
    };
    
    return (
      (isLogin ? (
        <>
          <ScrollView>
            <View style={styles.infor}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <View style={styles.infor__user}>
                      <Image style={styles.infor__user_img} source={TDTU}/>
                      {user ? (<View style={styles.infor__user_text}>
                        <Text>{user.username}</Text>
                        <Text>{user.phone}</Text>
                        <Text>{user.email}</Text>
                      </View>) : (<View style={styles.infor__user_text}>
                        <Text>Nothing</Text>
                        <Text>Null</Text>
                        <Text>Null</Text>
                      </View>)}
                  </View>
                </TouchableOpacity>
                <FontAwesome5 name="pen" size={24} color="black" style={styles.item__icon} onPress={() => setModalVisible(true)}/>
            </View>
            <View style={styles.list}>
              <Text style={styles.list__title}>Account</Text>
              <TouchableOpacity onPress={handleCart}>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Feather name="shopping-cart" size={24} color="black" style={styles.item__icon_first} />
                    <Text style={styles.item__text}>Gi??? h??ng c???a t??i</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOrder} >
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <FontAwesome5 name="money-bill" size={20} color="black" style={styles.item__icon_first} />
                    <Text style={styles.item__text}>????n h??ng c???a t??i</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHome}>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <FontAwesome name="list-alt" size={24} color="black" style={styles.item__icon_first} />
                    <Text style={styles.item__text}>Danh s??ch s???n ph???m</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <MaterialIcons name="privacy-tip" size={24} color="black" style={styles.item__icon_first}/>
                    <Text style={styles.item__text}>??i???u kho???n s??? d???ng</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Foundation name="burst-sale" size={32} color="black" style={styles.item__icon_first}/>
                    <Text style={styles.item__text}>??u ????i gi???m gi??</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Fontisto name="motorcycle" size={24} color="black" style={styles.item__icon_first}/>
                    <Text style={styles.item__text}>Giao h??ng c???c nhanh</Text>
                </View>
                <Entypo name="chevron-small-right" size={30} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleChangePassword}>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Entypo name="lock" size={24} color="black" style={styles.item__icon_first}/>
                    <Text style={styles.item__text}>?????i m???t kh???u</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogOut}>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Entypo name="log-out" size={24} color="black" style={styles.item__icon_first}/>
                    <Text style={styles.item__text}>Log Out</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <TouchableOpacity style={styles.modal__overlay} onPress={() => setModalVisible(!modalVisible)}>
            </TouchableOpacity>
              <View style={styles.modal__container}>
                <Text style={styles.modal__container_heading}>Vui l??ng nh???p th??ng tin</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChangePhone('phone', text)}
                  placeholder="Nh???p s??? ??i???n tho???i c???a b???n"
                  value={phone}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChangeEmail('email', text)}
                  placeholder="Nh???p email c???a b???n"
                  value={email}
                />
                <Text style={styles.button} onPress={handleChangeInfo}>C???p Nh???t</Text>
              </View>
          </Modal>
        </>
      ) : (
        <View style={styles.is__login}>
          <Image style={styles.is__login_img} source={TDTU}/>
          <Text>Vui l??ng ????ng nh???p ????? s??? d???ng t??nh n??ng n??y</Text>
          <Text style={styles.is__login_direct} onPress={() => navigation.navigate('Login')}>????ng nh???p</Text>
        </View>
      ))
    )
}

const styles = StyleSheet.create({
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
  },
  infor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  infor__user: {
      display: 'flex',
      flexDirection: 'row',
  },
  infor__user_img: {
    width: 64,
    height: 64,
    borderRadius: 9999,
    marginRight: 8,
  },
  list:{
    marginTop: 16,
    paddingHorizontal: 8,
  },
  list__title:{
    marginBottom: 4,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    cursor: 'pointer',
  },
  item__icon: {
    width: 38,
    textAlign: 'center',
  },
  item__first: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item__icon_first:{
    width: 40,
    textAlign: 'center',
    marginRight: 8,
  },
  modal__container: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    height: 450,
    borderColor: '#ccc',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  modal__overlay: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 450,
    top: 0,
    left: 0,
    right: 0,
  },
  modal__container_heading: {
    width: '100%',
    textAlign: 'center',
    lineHeight: 40,
    color: 'blue',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 30,
  },
  input: {
    height: 40,
    margin: 12,
    width: '90%',
    paddingVertical: 10,
    paddingLeft: 24,
    borderRadius: 24,
    backgroundColor: '#fff',
    color: 'black',
    outline: 'none',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    height: 40,
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 24,
    backgroundColor: '#fff',
    color: 'black',
    outline: 'none',
    borderColor: 'green',
    borderWidth: 1,
    textTransform: 'uppercase',
    color: 'green',
  },
});