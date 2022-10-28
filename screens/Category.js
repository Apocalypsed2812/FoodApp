import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';

import ProductItem from '../components/ProductItem';

// export default class Category extends React.Component {
//     static navigationOptions = ({navigation}) => {
//         return {
//             title: navigation.getParam('categoryName')
//         };
//     };
    
//     constructor(props){
//         super(props);
//         this.state = {
//             products: [
//                 {
//                     id: 1, 
//                     image: [
//                         {
//                             url: ''
//                         }
//                     ],
//                     name: 'Dụng cụ trượt tuyết',
//                     price: '50000',
//                     categoryId: 1,
//                 },
//                 {
//                     id: 2, 
//                     image: [
//                         {
//                             url: ''
//                         }
//                     ],
//                     name: 'Quần áo trượt tuyết',
//                     price: '30000',
//                     categoryId: 1,
//                 },
//                 {
//                     id: 1, 
//                     image: [
//                         {
//                             url: ''
//                         }
//                     ],
//                     name: 'Dụng cụ trượt tuyết 2',
//                     price: '50000',
//                     categoryId: 2,
//                 },
//                 {
//                     id: 2, 
//                     image: [
//                         {
//                             url: ''
//                         }
//                     ],
//                     name: 'Quần áo trượt tuyết 2',
//                     price: '30000',
//                     categoryId: 2,
//                 },
//             ]
//         };
//     }

//     render() {
//         const {navigation} = this.props
//         const id = navigation.getParam('categoryId')
//         console.log(id)
//         const userLogin = false
//         const handleAddToCart = () => {
//           if(!userLogin){
//             //console.log(userLogin)
//             Alert.alert(
//               "Error",
//               "Vui lòng đăng nhập để thực hiện chức năng này",
//               [
//                 {
//                   text: "Cancel",
//                   onPress: () => console.log("Cancel Pressed"),
//                   style: "cancel"
//                 },
//                 { text: "OK", onPress: () => console.log("OK Pressed") }
//               ]
//             );
//           }
//         }
//         return (
//             <FlatList 
//                 data={this.state.products.filter(item => item.categoryId === id)}
//                 contentContainerStyle={styles.container}
//                 numColumns={2}
//                 renderItem={({item}) => 
//                     <View style={styles.wrapper}>
//                         <ProductItem product={item} onPress={handleAddToCart}/>
//                     </View>
//                 }
//                 keyExtractor={item => item.id}
//             />
//         );
//     }
// }

export default function Category({navigation}) {
    Category.navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('categoryName')
        };
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            {
                id: 1, 
                image: [
                    {
                        url: ''
                    }
                ],
                name: 'Dụng cụ trượt tuyết',
                price: '50000',
                categoryId: 1,
            },
            {
                id: 2, 
                image: [
                    {
                        url: ''
                    }
                ],
                name: 'Quần áo trượt tuyết',
                price: '30000',
                categoryId: 1,
            },
            {
                id: 1, 
                image: [
                    {
                        url: ''
                    }
                ],
                name: 'Dụng cụ trượt tuyết 2',
                price: '50000',
                categoryId: 2,
            },
            {
                id: 2, 
                image: [
                    {
                        url: ''
                    }
                ],
                name: 'Quần áo trượt tuyết 2',
                price: '30000',
                categoryId: 2,
            },
        ])
    }, [])

    const id = navigation.getParam('categoryId')
    console.log(id)
    const userLogin = false
    const handleAddToCart = () => {
        if(!userLogin){
        //console.log(userLogin)
        Alert.alert(
            "Error",
            "Vui lòng đăng nhập để thực hiện chức năng này",
            [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
        }
    }
    return (
        <FlatList 
            data={products.filter(item => item.categoryId === id)}
            contentContainerStyle={styles.container}
            numColumns={2}
            renderItem={({item}) => 
                <View style={styles.wrapper}>
                    <ProductItem product={item} onPress={handleAddToCart}/>
                </View>
            }
            keyExtractor={item => item.id}
        />
    );

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper:{
    flex: 1,
    paddingHorizontal: 8
  }
});
