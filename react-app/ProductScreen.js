import React from 'react'
import { View, FlatList, Text, StyleSheet, ScrollView, Product } from 'react-native'
import Product from './Products';

class ProductScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        this.setState({
            products: data
        })
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Top products of 2024</Text>
                    <FlatList data={this.state.products}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <View>
                                <Product
                                    name={item.name}
                                    category={item.category}
                                    stock={item.stock}
                                    img={item.image}
                                    desc={item.description}
                                ></Product>
                            </View>
                        )}
                    ></FlatList>
                </View>
            </ScrollView>
        )
    }
}
export default ProductScreen;