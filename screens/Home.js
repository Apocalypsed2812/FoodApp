import React, {Component} from "react";
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native'
//import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
// import { storage } from '~/firebase.js';
// import app from '../firebase.js';

import Home from '../components/Home';
import Header from '../components/Header';

export default class HomeScreen extends Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: 
        () => 
        <Header 
          checkLogin={() => navigation.navigate('Login')} 
          user={navigation.state.params}
          settings={() => navigation.navigate('Settings')} 
        />,
        headerStyle: {backgroundColor: '#5fb8f4'},
    });

    constructor(props){
        super(props);
        this.state = {
          users: [
            {
              username: 'Apocalysed',
              email: '123@gamil.com',
              phone: '0983456324',
            }
          ],
          user: true,
          product: [],
        };
    }

    // componentDidMount() {
    //   // const {navigation} = this.props;
    //   // navigation.setParams({user: true});
    //   const dbRef = ref(getDatabase());
    //   get(child(dbRef, `products`))
    //     .then((snapshot) => {
    //         if (snapshot.exists()) {
    //             if (snapshot.val().length > 0) {
    //                 console.log(snapshot.val());
    //                 this.setState({product: snapshot.val()});
    //                 //setProductId(snapshot.val()[snapshot.val().length - 1].id + 1);
    //             }
    //         } else {
    //             console.log('No data available');
    //         }
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }
     
    render(){
        const {navigation} = this.props
        return (
          <Home />
        )
    }
}

const styles = StyleSheet.create({

})
