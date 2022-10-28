import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import CategoryListItem from '../components/CategoryListItem';
import Header from '../components/Header';

// export default class Categories extends React.Component {
//   static navigationOptions = ({ navigation, screenProps }) => ({
//       headerTitle: 
//       () => 
//       <Header 
//         checkLogin={() => navigation.navigate('Login')} 
//         user={navigation.state.params}
//         settings={() => navigation.navigate('Settings')} 
//       />,
//       headerStyle: {backgroundColor: '#5fb8f4'},
//   });

//     constructor(props){
//         super(props);
//         this.state = {
//           categories: [
//               {id: 1, name: 'Dụng cụ trượt tuyết'},
//               {id: 2, name: 'Quần áo trượt tuyết'},
//               {id: 3, name: 'Kính mũ'},
//           ]
//           //categories: []
//         };
//     }

//     // componentDidMount(){
//     //   axios.get()
//     //     .then(res => {
//     //       this.setState({
//     //         categories: res.data
//     //       })
//     //     })
//     //     .catch(error => {
//     //       console.error(error)
//     //     })
//     // }

//   render() {
//     const {navigation} = this.props
//     const {categories} = this.state
//     return (
//         <FlatList 
//           data={categories}
//           renderItem={({item}) => 
//             <CategoryListItem 
//                 category={item}
//                 onPress={() => navigation.navigate('Category', {
//                     categoryName: item.name,
//                     categoryId: item.id,
//                 })} />
//             }
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.container}
//         />
//     );
//   }
// }

export default function Categories({navigation}) {
  Categories.navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: 
      () => 
      <Header 
        checkLogin={() => navigation.navigate('Login')} 
        user={navigation.state.params}
        settings={() => navigation.navigate('Settings')} 
      />,
      headerStyle: {backgroundColor: '#5fb8f4'},
  });

    const [categories, setCategories] = useState([]);
    //const navigation = useNavigation();

    useEffect(() => {
        setCategories([
            {id: 1, name: 'Dụng cụ trượt tuyết'},
            {id: 2, name: 'Quần áo trượt tuyết'},
            {id: 3, name: 'Kính mũ'},
        ])
    }, [])
    
    return (
        <FlatList 
          data={categories}
          renderItem={({item}) => 
            <CategoryListItem 
                category={item}
                onPress={() => navigation.navigate('Category', {
                    categoryName: item.name,
                    categoryId: item.id,
                })} 
                />
            }
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
