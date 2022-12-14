import React, { useState, useContext } from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import {GlobalState} from '../context/GlobalState'
import { postMethod } from "../utils/fetchData";
import TDTU from '../assets/logo_tdtu.jpg'

function Settings(props){
    const {info, setInfo, handleHome, handleCart, handleOrder, onPressLogOut} = props

    const state = useContext(GlobalState)
    const [user, setUser] = state.UserAPI.user

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
          ToastAndroid.show("Số điện thoại không được trống", ToastAndroid.SHORT)
          return;
      }
      if (email.trim() === "") {
        ToastAndroid.show("Email không được trống", ToastAndroid.SHORT)
        return;
      }

      setModalVisible(false)
      setPhone("")
      setEmail("")

      let body = {
        id: info._id,
        phone,
        email,
      }
      postMethod("change-info", body)
          .then((res) => {
              if (res.success) {
                setUser([...user, res.user])
              } else {
                ToastAndroid.show(res.message, ToastAndroid.SHORT)
              }
          })
          .catch((err) => {
              console.log(err);
          });
    };
    return (
        <>
          <ScrollView>
            <View style={styles.infor}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <View style={styles.infor__user}>
                      <Image style={styles.infor__user_img} source={TDTU}/>
                      {info ? (<View style={styles.infor__user_text}>
                        <Text>{info.username}</Text>
                        <Text>{info.phone}</Text>
                        <Text>{info.email}</Text>
                      </View>) : (<View style={styles.infor__user_text}>
                        <Text>Nothing</Text>
                        <Text>Null</Text>
                        <Text>Null</Text>
                      </View>)}
                  </View>
                </TouchableOpacity>
                <FontAwesome5 name="pen" size={24} color="black" style={styles.item__icon} onPress={() => setModalVisible(true)}/>
                {/* <FontAwesomeIcon icon={faPen} style={styles.item__icon_first} /> */}
            </View>
            <View style={styles.list}>
              <Text style={styles.list__title}>Account</Text>
              <TouchableOpacity onPress={handleCart}>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    {/* <FontAwesomeIcon icon={faCartShopping} style={styles.item__icon_first} /> */}
                    <Feather name="shopping-cart" size={24} color="black" style={styles.item__icon_first} />
                    <Text style={styles.item__text}>Giỏ hàng của tôi</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOrder} >
              <View style={styles.item}>
                <View style={styles.item__first}>
                    {/* <FontAwesomeIcon icon={faMoneyBill} style={styles.item__icon_first} /> */}
                    <FontAwesome5 name="money-bill" size={20} color="black" style={styles.item__icon_first} />
                    <Text style={styles.item__text}>Đơn hàng của tôi</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHome}>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    {/* <FontAwesomeIcon icon={faList} style={styles.item__icon_first} /> */}
                    <FontAwesome name="list-alt" size={24} color="black" style={styles.item__icon_first} />
                    <Text style={styles.item__text}>Danh sách sản phẩm</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    {/* <FontAwesomeIcon icon={faBlind} style={styles.item__icon_first} /> */}
                    <MaterialIcons name="privacy-tip" size={24} color="black" style={styles.item__icon_first}/>
                    <Text style={styles.item__text}>Điều khoản sử dụng</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    {/* <FontAwesomeIcon icon={faSalesforce} style={styles.item__icon_first} /> */}
                    <Foundation name="burst-sale" size={32} color="black" style={styles.item__icon_first}/>
                    <Text style={styles.item__text}>Ưu đãi giảm giá</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    {/* <FontAwesomeIcon icon={faMotorcycle} style={styles.item__icon_first} /> */}
                    <Fontisto name="motorcycle" size={24} color="black" style={styles.item__icon_first}/>
                    <Text style={styles.item__text}>Giao hàng cực nhanh</Text>
                </View>
                <Entypo name="chevron-small-right" size={30} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressLogOut}>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    {/* <FontAwesomeIcon icon={faRightFromBracket} style={styles.item__icon_first} /> */}
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
                <Text style={styles.modal__container_heading}>Vui lòng nhập thông tin</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChangePhone('phone', text)}
                  placeholder="Nhập số điện thoại của bạn"
                  value={phone}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChangeEmail('email', text)}
                  placeholder="Nhập email của bạn"
                  value={email}
                />
                <Text style={styles.button} onPress={handleChangeInfo}>Cập Nhật</Text>
              </View>
          </Modal>
        </>
        // <Text>Settings</Text>
    )
}

export default Settings

const styles = StyleSheet.create({
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
      fontWeight: '550',
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
})

