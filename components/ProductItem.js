import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
//source={{uri: product.images[0].url}}
function ProductItem(props){
    const {product} = props
    console.log(product)
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: product.image_url}}/>
                <View style={styles.info}>
                    <Text style={styles.name}>Tên: {product.name}</Text>
                    <Text style={styles.price}>Giá: {product.price} VNĐ</Text>
                    <Text style={styles.description}>Mô tả: {product.description}</Text>
                    <TouchableOpacity>
                        <Text style={styles.cartText}>Thêm vào giỏ hàng +</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc',
        width: '100%',
        textAlign: 'center',
        marginTop: 32,
        borderColor: '#2f95dc',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 16,
        
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0}
    },
    container: {
        width: '100%',
        height: '100%',
        marginBottom: 20,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        display: 'flex',
        alignItems:'center'
    },
    info: {
        padding: 8
    },
    img: {
        height: 300,
        width: 300,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    price: {
        fontSize: 16,
        color: '#888',
    },
    description: {
        marginVertical: 16,
        textAlign: 'justify'
    }
});
