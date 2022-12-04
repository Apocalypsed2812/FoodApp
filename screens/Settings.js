import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useContext } from "react";
import {Text, View, Image, StyleSheet} from 'react-native'

import {GlobalState} from '../context/GlobalState'
import Settings from '../components/Settings';
import { TOKEN_NAME } from "../credentials";
import TDTU from '../assets/logo_tdtu.jpg';

export default function SettingsScreen({navigation}){
    const state = useContext(GlobalState)
    const [isLogin, setIsLogin] = state.UserAPI.login;
    const [user, setUser] = state.UserAPI.user
  
  // if(!isLogin){
    //   navigation.navigate('Login')
    //   return
    // }
    useEffect(() => {})
    
    const handleLogOut = async () => {
      await AsyncStorage.removeItem(TOKEN_NAME)
      // console.log("Await after remote item: ", await AsyncStorage.getItem(TOKEN_NAME))
      setIsLogin(false)
      setUser(null)
      navigation.navigate('Login')
      // return
    }

    SettingsScreen.navigationOptions = {
        title: 'Settings'
    }
    
    return (
      (isLogin ? (<Settings 
        onPressLogOut={handleLogOut} 
        info={user} 
        handleOrder={() => navigation.navigate('Orders')}
        handleHome={() => navigation.navigate('Home')}
        handleCart={() => navigation.navigate('Cart')}
      />
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
});