import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet,Animated, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';


const DisplayAssign = () => {
    return (
        <View style={styles.row}>
            <Icon name='check-circle' type='font-awesome' color="#29cc83" size={30} style={{marginTop:5}} />
            <Image source={require('/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/assets/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg')} style={styles.img}/>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.title}>Name</Text>
                <Text style={styles.count}>Distance</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff', 
        paddingVertical: 10,
    },
    img: 
    {
        marginLeft:10,
        width: 40,
        height: 40,
        borderRadius: 40/ 2,
        borderColor: 'gray',
        borderWidth: 2,
    },
    title: {
        paddingTop: 5,
        textAlign:'center',
        fontWeight: '500',
        fontSize: 16,
    },
    count:{
        textAlign:'center',
        paddingTop: 1,
        fontSize: 14,
        color:'#808080',
        marginLeft: 12,
    },
    });
export default DisplayAssign;