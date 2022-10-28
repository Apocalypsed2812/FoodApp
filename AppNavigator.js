import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from "./screens/Category";
import Categories from "./screens/Categories";
import Cart from "./screens/Cart";
import Orders from "./screens/Orders";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";

const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
    // Home: {
    //     screen: Home
    // },
    Categories: {
        screen: Categories
    },
    Category: {
        screen: Category
    },
    Cart: {
        screen: Cart
    },
    Orders: {
        screen: Orders
    },
    Settings: {
        screen: Settings
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
})

CategoryStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => {
        return <Icon name="ios-planet"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

const CartStack = createStackNavigator({
    Cart: {
        screen: Cart
    },
})


CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({focused}) => {
        return <Icon name="ios-cart"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

const OrderStack = createStackNavigator({
    Orders: {
        screen: Orders
    },
})


OrderStack.navigationOptions = {
    tabBarLabel: 'Orders',
    tabBarIcon: ({focused}) => {
        return <Icon name="ios-wallet"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

const SettingStack = createStackNavigator({
    Settings: {
        screen: Settings
    },
})


SettingStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => {
        return <Icon name="ios-cog"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    CartStack,
    OrderStack,
    SettingStack
})

export default AppNavigator