import React, { useState, useEffect } from "react";
import {Text} from 'react-native'

import Settings from '../components/Settings';

export default function SettingsScreen({navigation}){
    SettingsScreen.navigationOptions = {
        title: 'Settings'
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers([
        {
          name: 'Apocalysed',
          phone: '0582564360',
          email: 'phamhuynhanhtien123@gmail.com',
        },
      ])
    },[])
    
    const handleLogOut = () => {
      navigation.navigate('Login')
    }
    return (
      <Settings 
        info={users[0]} 
        onPress={() => navigation.navigate('Orders')}
        onPressLogOut={handleLogOut} 
      />
    )
}