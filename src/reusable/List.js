import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen')

// const List = (item, navigation) => {
//     return(
//         <TouchableOpacity onPress={() => navigation.navigate('Content')}>
//             <View style={styles.container}>
//                 <Image style={styles.thumbnail} source={{uri:item.urlToImage}}/>
//                 <View>
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.author}>{item.author ? item.author : 'Anonim'}</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

class List extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const {item, navigation} = this.props
        
        return(
            <TouchableOpacity onPress={() => navigation.navigate('Content', {url: item.url})}>
                <View style={styles.container}>
                    <Image style={styles.thumbnail} source={{uri:item.urlToImage}}/>
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.author}>{item.author ? item.author : 'Anonim'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{   
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center'
    },
    thumbnail:{        
        width:width*0.2,
        height:height*0.1,
        marginRight: 5,
    }, 
    title:{
        padding: 3,
        maxWidth: width*0.8,
        fontWeight:'700',
    },
    author:{
        padding: 3,
        fontSize:12
    }
});

export default List;
