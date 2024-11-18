import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Product = (props) => {
    return(
        <View style={styles.cardContainer}>
            <Image source={{url: `${props.img}`}} style={styles.img}/>
            <View style={styles.cardDesc}>
                <Text>{props.name}</Text>
                <Text>{props.desc}</Text>
                <View style={styles.footer}>
                    <Text>Stock: {props.stock}</Text>
                    <Text>Price: {props.category}</Text>
                </View>
            </View>
        </View> 
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "white",
        marginButton: 10,
        borderRadius: 10
    },
    img: {
        width: 250,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Product;