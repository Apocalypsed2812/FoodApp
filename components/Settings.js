import React, {useState} from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faBlind, faCartShopping, faList, faMoneyBill, faMotorcycle, faPen, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import { faSalesforce } from "@fortawesome/free-brands-svg-icons";

import TDTU from '../assets/logo_tdtu.jpg'

function Settings(props){
    const {info, handleHome, handleCart, handleOrder, onPressLogOut} = props
    const [modalVisible, setModalVisible] = useState(false);
    // console.log(info)
    return (
        <>
          <ScrollView>
            <View style={styles.infor}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <View style={styles.infor__user}>
                      <Image style={styles.infor__user_img} source={TDTU}/>
                      {info ? (<View style={styles.infor__user_text}>
                        <Text>{info.username}</Text>
                        <Text>0582564360</Text>
                        <Text>anhtien123@gmail.com</Text>
                      </View>) : (<View style={styles.infor__user_text}>
                        <Text>Nothing</Text>
                        <Text>Null</Text>
                        <Text>Null</Text>
                      </View>)}
                  </View>
                </TouchableOpacity>
                <FontAwesome5 name="pen" size={24} color="black" style={styles.item__icon}/>
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
            <View>
              <Text>This is my modal</Text>
              <Text onPress={() => setModalVisible(!modalVisible)}>Close</Text>
            </View>
          </Modal>
        </>
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
    // item__text:{
    //   fontWeight: 600,
    // }
})

