import React from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native'
import { Icon } from "@rneui/themed";
import { Entypo, AntDesign } from '@expo/vector-icons'; 

import TDTU from '../assets/logo_tdtu.jpg'

function Settings(props){
    const {info, onPress, onPressLogOut} = props
    return (
        <>
          <ScrollView>
            <View style={styles.infor}>
                <View style={styles.infor__user}>
                    <Image style={styles.infor__user_img} source={TDTU}/>
                    <View style={styles.infor__user_text}>
                      <Text>Apocalysed</Text>
                      <Text>0582564360</Text>
                      <Text>anhtien123@gmail.com</Text>
                    </View>
                </View>
                <Icon
                  name='edit' 
                />
            </View>
            <View style={styles.list}>
              <Text style={styles.list__title}>Account</Text>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Text style={styles.item__icon_first}>Icon</Text>
                    <Text onPress={onPress} style={styles.item__text}>My Orders</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Text style={styles.item__icon_first}>Icon</Text>
                    <Text style={styles.item__text}>My Orders</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Text style={styles.item__icon_first}>Icon</Text>
                    <Text style={styles.item__text}>My Orders</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Text style={styles.item__icon_first}>Icon</Text>
                    <Text style={styles.item__text}>My Orders</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Text style={styles.item__icon_first}>Icon</Text>
                    <Text style={styles.item__text}>My Orders</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <Text style={styles.item__icon_first}>Icon</Text>
                    <Text style={styles.item__text}>My Orders</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.item}>
                <View style={styles.item__first}>
                    <AntDesign name="logout" size={20} color="black" style={styles.item__icon_first}/>
                    <Text onPress={onPressLogOut} style={styles.item__text}>Log Out</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
              </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    item__first: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    item__icon_first:{
      marginRight: 8,
    },
    // item__text:{
    //   fontWeight: 600,
    // }
})

