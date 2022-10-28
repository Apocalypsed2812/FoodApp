import React from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native'

import SkiiImage from '../assets/skii.png'

function Register({clickLogin}){
    return (
        <View style={styles.container}>
        <View style={styles.container__form}>
            <Text style={styles.container__form_heading}>Đăng kí</Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeText}
              placeholder="Nhập username"
              //value={"Nhập username"}
            />
            <TextInput
              style={styles.input}
              //onChangeText={onChangeText}
              placeholder="Nhập password"
              //value={"Nhập password"}
            />
            <TextInput
              style={styles.input}
              //onChangeText={onChangeText}
              placeholder="Nhập lại password"
              //value={"Nhập password"}
            />
        </View>
        <View style={styles.container__button}>
          <TouchableOpacity> 
            <Text style = {styles.btn__register}>
                Register
            </Text>
          </TouchableOpacity >
          <View style={styles.register__text}>
              <Text>Bạn đã có tài khoản ? </Text>
              <Text style={styles.register__text_btn} onPress={clickLogin}>Đăng Nhập</Text>
          </View>
        </View>
      </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    container__form:{
        flex: 3,
        backgroundColor: '#5fb8f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingVertical: '16px',
        paddingBottom: 8,
    },
    container__form_heading: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 8,
      textTransform: 'capitalize',
    },
    container__button:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24,
        paddingBotom: 16,
    },
    input: {
      height: 40,
      margin: 12,
      width: '80%',
      paddingVertical: 10,
      paddingLeft: 24,
      borderRadius: 24,
      backgroundColor: '#fff',
      color: 'black',
      outline: 'none',
    },
    btn__register:{
      width: '100%',
      padding: 8,
      borderRadius: 24,
      // shadowColor: 'blue',
      // shadowOpacity: 0.1,
      // shadowRadius: 10,
      // shadowOffset: {width: 0, height: 0},
      borderColor: '#5fb8f4',
      borderWidth: 1,
      paddingHorizontal: 130,
      paddingVertical: 10,
      color: '#5fb8f4',
      textTransform: 'capitalize',
    },
    register__text: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 20,
    },
    register__text_btn: {
      marginLeft: 2,
      cursor: 'pointer',
      color: '#5fb8f4',
    },
})

