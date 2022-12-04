import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
//source={{uri: product.images[0].url}}
function ProductDetailItem(props){
    const {product} = props
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{product.price}</Text>
                        <TouchableOpacity onPress={onPress}>
                            <Text style={styles.cartText}>MUA +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductDetailItem

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0}
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    info: {
        padding: 8
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
});
