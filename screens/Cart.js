import React, {Component} from "react";
import axios from 'axios';
import {Text, FlatList, StyleSheet, View, Button} from 'react-native'

import Cart from '../components/Cart';

export default class CartScreen extends Component{
    static navigationOptions = {
        title: 'Cart'
    };

    constructor(props){
        super(props);
        this.state = {
          cart: [
              {id: 1, name: 'Dụng cụ trượt tuyết', price: 500, quantity: 2},
              {id: 2, name: 'Quần áo trượt tuyết', price: 600, quantity: 3},
              {id: 3, name: 'Kính mũ', price: 700, quantity: 4},
          ],
          userLogin: 0,
          //cart: []
        };
    }

    // componentDidMount(){
    //   axios.get()
    //     .then(res => {
    //       this.setState({
    //         cart: res.data
    //       })
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })
    // }
    
    render(){
        const {navigation} = this.props
        let totalPrice = this.state.cart.reduce((sum, item) => {
          return sum += item.price * item.quantity
        },0)
        
        const handleLogin = () => {
          if(this.state.userLogin !== 1){
            navigation.navigate('Login')
          }
        }
        return (
          <> 
            <FlatList 
              data={this.state.cart}
              renderItem={({item}) => 
                <Cart 
                    cartProduct={item}
                />
                }
              keyExtractor={item => item.id}
              contentContainerStyle={styles.container}
            />
            <View style={styles.total}>
              <Text style={styles.totalPrice}>Tổng tiền: {totalPrice}</Text>
              <Button style={styles.button} title='Đặt hàng' onPress={handleLogin}/>
            </View>
          </>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  total:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 30,
    paddingVertical: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 16,
    color: 'blue'
  },
  button: {
    fontSize: 16,
    color: 'blue'
  }
});