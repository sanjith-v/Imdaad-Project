import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {Icon} from 'react-native-elements';
import React, {useState, useEffect, createContext,} from 'react';

import firebase from '/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/database/firebase.js';
import assignTech from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/assignTech.js";
import completed from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/completed";
import home from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/home";
import notifications from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/notifications";
import orderDetails from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/orderDetails";
import techOrders from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/techOrders";
import technicians from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/technicians";
import unassigned from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/unassigned";
import workorders from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/screens/workorders";


const Stack = createStackNavigator();
    const AppStack = () => {
      
    return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="assignTech" component={assignTech} options={({route, navigation}) => ({
          title: 'Assign Technicians',  headerTitleStyle:{ color:'white'},headerStyle: {backgroundColor: '#043B6F',},
          headerLeft: () => (
            <Icon onPress={() => navigation.navigate("unassigned")} name='arrow-left' type='font-awesome' color="#fff" style={{paddingLeft: 5}} />
          )
        })}/>

        <Stack.Screen name="completed" component={completed}  options={({route, navigation}) => ({
          title: 'Completed',  headerTitleStyle:{ color:'white'},headerStyle: {backgroundColor: '#043B6F',},
          headerLeft: () => (
            <Icon onPress={() => navigation.navigate("home")} name='arrow-left' type='font-awesome' color="#fff" style={{paddingLeft: 5}} />
          )
        })}/>
        <Stack.Screen name="home" component={home} options={({route, navigation}) => ({
            title: 'Home', headerLeft: ()=> ( <Icon  name='bars' type='font-awesome' color="#fff" style={{paddingLeft: 5}} />),
               headerTitleStyle:{ color:'white', },headerStyle: {backgroundColor: '#043B6F',},
            headerRight: () => (
              <Icon onPress={() => navigation.navigate("notifications")} name='bell' type='font-awesome' color="#fff" style={{paddingRight: 10}} />
            )
          })}/>

        <Stack.Screen name="notifications" component={notifications}options={({route, navigation}) => ({
          title: 'Notifications',  headerTitleStyle:{ color:'white'},headerStyle: {backgroundColor: '#043B6F',},
          headerLeft: () => (
            <Icon onPress={() => navigation.navigate("home")} name='arrow-left' type='font-awesome' color="#fff" style={{paddingLeft: 5}} />
          )
        })}/>
        <Stack.Screen name="orderDetails" component={orderDetails} options={({route, navigation}) => ({
          title: 'Order Details',  headerTitleStyle:{ color:'white'},headerStyle: {backgroundColor: '#043B6F',},
          
        })}/>
        <Stack.Screen name="techOrders" component={techOrders} options={({route, navigation}) => ({
          title: <View style={{ flexDirection:'column'}}><Image style={{width: 80,height: 80,borderRadius: 80/ 2,borderColor: 'gray',borderWidth: 2,marginLeft:10, marginTop: 5}}
           source ={require('/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/assets/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg')}/>
           <Text style={{color:'#fff', marginTop:5,  fontSize:20, textAlign:'center'}}>Name</Text>
           <Text style={{color:'#6e6b6b', fontSize:15, textAlign:'center'}}>No. of orders</Text>
           </View>,
             headerTitleStyle:{ color:'white'},headerStyle: {backgroundColor: '#043B6F', height:150},
       
        })}/>
        <Stack.Screen name="technicians" component={technicians} options={({route, navigation}) => ({
          title: 'Technicians',  headerTitleStyle:{ color:'white'},headerStyle: {backgroundColor: '#043B6F',},
          headerLeft: () => (
            <Icon onPress={() => navigation.navigate("home")} name='arrow-left' type='font-awesome' color="#fff" style={{paddingLeft: 5}} />
          )
        })}/>
        <Stack.Screen name="unassigned" component={unassigned} options={({route, navigation}) => ({
          title: 'Unassigned',  headerTitleStyle:{ color:'white'},headerStyle: {backgroundColor: '#043B6F',},
          headerLeft: () => (
            <Icon onPress={() => navigation.navigate("home")} name='arrow-left' type='font-awesome' color="#fff" style={{paddingLeft: 5}} />
          )
        })}/>
        <Stack.Screen name="workorders" component={workorders}
        options={({route, navigation}) => ({
          title: 'Work Orders',  headerTitleStyle:{ color:'white'},headerStyle: {backgroundColor: '#043B6F',},
          headerLeft: () => (
            <Icon onPress={() => navigation.navigate("home")} name='arrow-left' type='font-awesome' color="#fff" style={{paddingLeft: 5}} />
          )
        })}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  img: 
  {
      marginLeft:30,
      width: 80,
      height: 80,
      borderRadius: 80/ 2,
      borderColor: 'gray',
      borderWidth: 2,
  },
});

export default AppStack;