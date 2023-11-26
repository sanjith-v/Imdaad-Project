import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import { ListItem, Avatar,Icon } from "react-native-elements";
import firebase from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/database/firebase.js";


const technicians = ({navigation}) => {
    const [users, setUsers]= useState([])

    useEffect(() => {
        
        firebase.db.collection("users").where("Role", "==", "Technician").onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.docs.forEach((doc) => {
                
                const {Name} = doc.data();
                users.push({
                id: doc.id,
                Name,
              });
            });
            setUsers(users);
            
          });
    }, []);
    return (
        <ScrollView style={styles.container}>
            {users.map((user) => {
                return(
            <ListItem
                    key ={user.id}
                    bottomDivider
                    onPress={() => {navigation.navigate("techOrders", {userId: user.id, });}}
            > 
            <ListItem.Content>
            <View style={styles.row}>
                    <View style={styles.box} >
                        <View style={styles.format}>
                            <Image source={require('/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/assets/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg')} style={styles.img}/>
                            <Text style={styles.title}>{user.Name}</Text>
                            <Text style={styles.count}>Orders completed</Text>
                        </View>
                    </View>
             
            
            </View>
            </ListItem.Content>
           </ListItem>
           );
        })}
        </ScrollView>
        );
    }

   
               
                   
                    
            
    
    const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            backgroundColor: '#E8EAED', 
        },
        row: {
            flexDirection: 'row',
            flexWrap:'wrap', 
        },

        box: {
            elevation: 5,
            shadowColor: 'rgba(0,0,0, .4)', 
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1, 
            shadowRadius: 1,
            marginLeft: 10,
            marginTop:10,
            paddingVertical: 15,
            width: 145,
            height: 150,
            backgroundColor: '#fff',
            borderRadius: 5, 
           },

           format:{
        
            alignContent:'center',
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
            color:'#808080'
        },
    
        img: 
            {
                marginLeft: 42,
                width: 60,
                height: 60,
                borderRadius: 60/ 2,
                borderColor: 'gray',
                borderWidth: 2,
            },
    
    })
export default technicians;