import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import { ListItem, Avatar,Icon } from "react-native-elements";
import firebase from '/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/database/firebase.js';
 
const notifications = ({navigation}) => {
    const [workorders, setWorkOrders]= useState([])

    useEffect(() => {
        
        firebase.db.collection("workorders").where("Status", "==", "Job started").onSnapshot((querySnapshot) => {
          const workorders = [];
          querySnapshot.docs.forEach((doc) => {
            
            const { Date, Technician, Status,Clientref, } = doc.data();
            workorders.push({ 
              id: doc.id,
            Date, 
            Technician, 
            Status,
            Clientref,
            });
          });
          setWorkOrders(workorders);
          
        });
      }, []);



    return (
        <ScrollView style={styles.container}>
            {workorders.map((workorder) => {
                return(
                    <ListItem
                    key={workorder.id}
                    bottomDivider
                    style={styles.list}
            onPress={() => {
                navigation.navigate("orderDetails", {
                workOrderId: workorder.id,
              });
            }}
            > 
            <ListItem.Content >
                <View style={styles.list}>
                    <Text style={styles.date}>{workorder.Date}</Text>
                    <Text style={styles.status}>{workorder.Clientref} assigned successfully</Text>
                    <Text style={styles.detail}>{workorder.Clientref} has been assigned to Mr. {workorder.Technician}</Text>
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
    list:{
        backgroundColor:'white',
    },
    date:{
        color:'#6e6b6b',
        fontSize: 10,
    },
    status:{
        color:'#000000',
        fontSize: 14,
        fontWeight: '400',
    },
    detail:{
        color:'#000000',
        fontSize: 12,
    },
});

export default notifications;