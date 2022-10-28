import React from "react";
import {Image, Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native'

import TDTU from '../assets/logo_tdtu.jpg'

function Home(){
    return (
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.image} source={TDTU}/>
            <View style={styles.categories__row}>
                {/* //{product.map((item, index) => ( */}
                    <View style={styles.categories__col_3}>
                      <View style={styles.category}>
                          <Image style={styles.category__image} source={TDTU}/>
                          <Text style={styles.category__text}>Salad</Text>
                      </View>
                  </View> 
                {/* //))}   */}
            </View>
            <View style={styles.eat__today}>
              <Text style={styles.eat__today_title}>Hôm nay ăn gì ?</Text>
              <View>
                <ScrollView
                horizontal={true}>
                  <View style={styles.categories__row_horizontal}>
                    <View style={styles.categories__col_3}>
                        <View style={styles.category}>
                            <Image style={styles.category__image} source={TDTU}/>
                            <Text style={styles.category__text}>Salad</Text>
                        </View>
                    </View>
                    <View style={styles.categories__col_3}>
                        <View style={styles.category}>
                            <Image style={styles.category__image} source={TDTU}/>
                            <Text style={styles.category__text}>Salad</Text>
                        </View>
                    </View>
                    <View style={styles.categories__col_3}>
                        <View style={styles.category}>
                            <Image style={styles.category__image} source={TDTU}/>
                            <Text style={styles.category__text}>Salad</Text>
                        </View>
                    </View>
                    <View style={styles.categories__col_3}>
                        <View style={styles.category}>
                            <Image style={styles.category__image} source={TDTU}/>
                            <Text style={styles.category__text}>Salad</Text>
                        </View>
                    </View>
                    <View style={styles.categories__col_3}>
                        <View style={styles.category}>
                            <Image style={styles.category__image} source={TDTU}/>
                            <Text style={styles.category__text}>Salad</Text>
                        </View>
                    </View>
                    <View style={styles.categories__col_3}>
                        <View style={styles.category}>
                            <Image style={styles.category__image} source={TDTU}/>
                            <Text style={styles.category__text}>Salad</Text>
                        </View>
                    </View>
                    
                  </View>
                </ScrollView>
              </View>
            </View>

            <View style={styles.eat__impress}>
              <Text style={styles.eat__impress_title}>Món ăn nổi bật</Text>
              <View style={styles.categories__row}>
                <View style={styles.categories__col_6}>
                    <View style={styles.category}>
                        <Image style={styles.category__image} source={TDTU}/>
                        <Text style={styles.category__text}>Salad</Text>
                    </View>
                </View>
                <View style={styles.categories__col_6}>
                    <View style={styles.category}>
                        <Image style={styles.category__image} source={TDTU}/>
                        <Text style={styles.category__text}>Salad</Text>
                    </View>
                </View>
                <View style={styles.categories__col_6}>
                    <View style={styles.category}>
                        <Image style={styles.category__image} source={TDTU}/>
                        <Text style={styles.category__text}>Salad</Text>
                    </View>
                </View>
                <View style={styles.categories__col_6}>
                    <View style={styles.category}>
                        <Image style={styles.category__image} source={TDTU}/>
                        <Text style={styles.category__text}>Salad</Text>
                    </View>
                </View>
                <View style={styles.categories__col_6}>
                    <View style={styles.category}>
                        <Image style={styles.category__image} source={TDTU}/>
                        <Text style={styles.category__text}>Salad</Text>
                    </View>
                </View>
                <View style={styles.categories__col_6}>
                    <View style={styles.category}>
                        <Image style={styles.category__image} source={TDTU}/>
                        <Text style={styles.category__text}>Salad</Text>
                    </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    image: {
      width: '100%',
      height: 300,
    },
    categories__row: {
      //height: 400,
      flex: 1,
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 16,
      flexDirection: 'row',
      marginHorizontal: -4,
      paddingLeft: 8,
    },
    categories__row_horizontal: {
      //height: 'fit-content',
      flex: 1,
      width: '100%',
      display: 'flex',
      marginTop: 16,
      flexDirection: 'row',
      marginHorizontal: -4,
    },
    categories__col_3: {
      width: '25%',
      height: 50,
      paddingHorizontal: 4,
      marginBottom: 20,
    },
    categories__col_6: {
      width: '50%',
      height: 50,
      paddingHorizontal: 4,
      marginBottom: 20,
    },
    category: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      //shadowOffset: {width: 0, height: 0},
    },
    category__image: {
      width: '60%',
      height: 20,
    },
    // category__text: {

    // },
    eat__today: {
      marginTop: 16,
      paddingHorizontal: 8,
    },
    eat__today_title:{
      color: '#333',
      //fontWeight: 600,
      fontSize: 20,
    },
    eat__impress:{
      marginTop: 16,
    },
    eat__impress_title:{
      color: '#333',
      //fontWeight: 600,
      fontSize: 20,
      marginLeft: 8,
    },
})
