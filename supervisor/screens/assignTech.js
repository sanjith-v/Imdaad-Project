import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet,Animated, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import DisplayAssign from '../components/displayAssign';

const assignTech = ({navigation}) => {

    return (
        <ScrollView style={styles.container}>
             <SearchBar placeholder="Type Here..."/>
            <TouchableOpacity onPress={() => navigation.navigate("techOrders")}>
                <DisplayAssign/>
            </TouchableOpacity>
            <TouchableOpacity>
                <DisplayAssign/>
            </TouchableOpacity>
            <TouchableOpacity>
                <DisplayAssign/>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.submit}>Assign</Text>
            </TouchableOpacity>
            

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
         
    },
    submit: {
        textAlign: 'center',
        paddingVertical: 10,
        marginLeft: 20,
        marginRight:20,
        backgroundColor: '#CEA870',
        borderRadius: 5,  
        color: 'white',
        fontSize: 18,
        marginTop: 50,
     },
    
    });

export default assignTech;