import React from "react";
import {Image, Text, View, StyleSheet, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

//import SkiiImage from '../assets/skii.png'
import TDTU from '../assets/logo_tdtu.jpg'

function Header({checkLogin, user, settings}){
    return (
        <View style={styles.container}>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeText}
              placeholder="Tìm kiếm"
              //value={"Nhập username"}
            />
            {user 
            ? 
            <FontAwesome5 
              name="user-circle" 
              size={28} color="black" 
              style={styles.icon}
              onPress={settings}
              />
            : 
            <Text style={styles.text} onPress={checkLogin}>Login</Text>}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#5fb8f4',
        width: '100%',
    },
    input: {
      width: '70%',
      paddingVertical: 4,
      paddingLeft: 24,
      borderRadius: 24,
      backgroundColor: '#fff',
      color: 'black',
      outline: 'none',
    },
    icon: {
      cursor: 'pointer',
      color: '#fff',
      borderRadius: 4,
    },
    text: {
      cursor: 'pointer',
      color: '#fff',
      fontSize: 16,
    }
})
