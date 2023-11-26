import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import firebase from "../database/firebase";
import { ListItem, Avatar } from "react-native-elements";

const UsersList = (props) => { 
    const [users, setUsers]= useState([])
    
    useEffect(() => {
        firebase.db.collection("users").onSnapshot((querySnapshot) => {
          const users = [];
          querySnapshot.docs.forEach((doc) => {
            const { name, email } = doc.data();
            users.push({
              id: doc.id,
              name,
              email,
            });
          });
          setUsers(users);
        });
      }, []);

    return(
        <View  >
            <TouchableOpacity  onPress={() => props.navigation.navigate("CreateUserScreen")}>
                <Text style={styles.submit}> Create User </Text>
            </TouchableOpacity>
            {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
    
            <Avatar rounded size="small" title={user.name[0]} backgroundColor='#575757' activeOpacity={0.7}/>
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}

        </View>
    )
}
const styles = StyleSheet.create({
submit: {
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#55f690',
    borderRadius: 5, 
},
});

export default UsersList;