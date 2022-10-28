import React from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native'

//import SkiiImage from '../assets/skii.png'
import TDTU from '../assets/logo_tdtu.jpg'

function Login({clickRegister, handleSubmit}){
    return (
        <View style={styles.container}>
            <View style={styles.container__form}>
              <Image style={styles.form__image} source={TDTU}/>
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
            <Text style={styles.forgot}>Quên mật khẩu ?</Text>
            </View>
            <View style={styles.container__button}>
              <TouchableOpacity> 
                <Text style = {styles.btn__login} onPress={handleSubmit}>
                    Log In
                </Text>
              </TouchableOpacity >
              <View style={styles.login__text}>
                <Text>Bạn chưa có tài khoản ?</Text> 
                <Text style={styles.login__text_btn} onPress={clickRegister}>Đăng Kí</Text>
              </View>
            </View>
        </View>
    )
}

export default Login

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
        paddingBottom: 16,
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
    forgot: {
      color: '#fff',
    },
    btn__login:{
      width: '100%',
      padding: 8,
      borderRadius: 24,
      borderColor: '#5fb8f4',
      borderWidth: 1,
      paddingHorizontal: 130,
      paddingVertical: 10,
      color: '#5fb8f4',
    },
    login__text: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 20,
    },
    login__text_btn: {
      marginLeft: 4,
      cursor: 'pointer',
      color: '#5fb8f4',
    },
    form__image: {
      width: 64,
      height: 64,
      marginTop: 20,
      marginBottom: 16,
      borderRadius: 9999,
    },
})
