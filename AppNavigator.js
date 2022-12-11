import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from "./screens/Category";
import Cart from "./screens/Cart";
import Orders from "./screens/Orders";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Register from "./screens/Register";
import FoodStore from "./screens/FoodStore";
import ProductDetail from "./screens/ProductDetail";
import Home from "./screens/Home";

const color = {
    ACTIVE: '#147efb',
    // ACTIVE: '#82FA58',
    INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
    Home: {
        screen: Home
    },
    FoodStore: {
        screen: FoodStore
    },
    ProductDetail: {
        screen: ProductDetail
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
        return <Icon name="ios-home"
            size={28}
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
            size={30}
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
            size={30}
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
            size={30}
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