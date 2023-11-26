import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('CreateUserScreen')}>
      <Text>Go to create user</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('UsersList')}>
      <Text>Go to user list</Text>
      </TouchableOpacity>
    
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="UsersList" component={UsersList} options={{ title: "Users List" }} />
        <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{ title: "Create a New User" }} />
        <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{ title: "User Detail" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  submit: {
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 200,
    backgroundColor: '#55f690',
    marginTop: 10,
    borderRadius: 5,  
  },
});

export default App;