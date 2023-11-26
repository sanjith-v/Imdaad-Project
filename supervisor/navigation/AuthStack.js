import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect, createContext,} from 'react';

import login from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/login.js";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator  initialRouteName="login">
            <Stack.Screen 
                name="login" 
                component={login} 
                options={
                    { headerShown: false }, 
                    {headerStyle: {height: 20, backgroundColor: '#043B6F',}}
                    }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthStack;