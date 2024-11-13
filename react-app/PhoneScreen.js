import React from 'react';
import { Text, View, FlatList, StyleSheet} from 'react-native';
import data from './data/data.json'

class PhoneScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            phones:[]
        }
    }
    componentDidMount(){
        this.setState({
            phones: data
        })
    }


    render(){
        return(
        <View>
            <Text style={StyleSheet.screenTitle}>Phones Screen</Text>
            <FlatList data={this.state.phones}
                      keyExtractor={countries => countries.id}
                      renderItem={({item}) => (
                        <View style={styles.cardWrapper}>
                            <Text>Phone name: {item.name}</Text>
                            <Text>Phone category: {item.category}</Text>
                            <Text>Phone price {item.price}</Text>
                            <Text>Is stock: {item.stock}</Text>
                            <Text>Phone image {item.image}</Text>
                            <Text>Phone description: {item.description}</Text>
                        </View>
                      )}
            ></FlatList>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
});

export default PhoneScreen;