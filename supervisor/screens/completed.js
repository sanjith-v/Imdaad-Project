import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import { ListItem, Avatar,Icon } from "react-native-elements";
import firebase from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/database/firebase.js";


const completed = ({navigation}) => {
    const [workorders, setWorkOrders]= useState([])
    const [ctr, setCounter]=useState(0)


    useEffect(() => {
        firebase.db.collection("workorders").where("Status", "==", "Completed").get().then(function(querySnapshot) {      
            setCounter(querySnapshot.size); 
        });
        firebase.db.collection("workorders").where("Status", "==", "Completed").onSnapshot((querySnapshot) => {
          const workorders = [];
          querySnapshot.docs.forEach((doc) => {
            const { Worktype, Location, Date, Technician, Status,Client, Clientref, Contact, Description, Project, Reportedby, Reportedon,Skill,Supervisor} = doc.data();
            workorders.push({
              id: doc.id,
              Worktype,
              Location,
              Date, 
              Technician,
              Status,
              Client, 
              Clientref,
              Contact, 
              Description, 
              Project, 
              Reportedby, 
              Reportedon,
              Skill,
              Supervisor
            });
          });
          setWorkOrders(workorders);
        });
      }, []);
      
      return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Text>Completed work orders: {ctr}</Text>
                <TouchableOpacity  style={styles.filter} > 
                    <Icon name='filter' type='font-awesome' color="grey" size={16} />
                    <Text>Filter</Text> 
                </TouchableOpacity>
            </View>
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
          <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.orderid}>Order ID</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.status}>{workorder.Status} </Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.category}>Worktype</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.category}>:</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.detail}>{workorder.Worktype}</Text>
                        </View>
                    </View> 
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.category}>Date & Time</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.category}>:</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.detail}>{workorder.Date}</Text>
                        </View>
                    </View>    
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.category}>Technician</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.category}>:</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.detail}>{workorder.Technician}</Text>
                        </View>
                    </View>   
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.category}>Location</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.category}>:</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.detail}>{workorder.Location}</Text>
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
    top: {
        marginLeft: 5,
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent:'space-between'
    },
    filter:{
        marginRight:10,
        flexDirection: 'row',
    },
    list:{
        backgroundColor:'white',
        
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        borderColor:'black',
        borderRadius: 3,
        elevation: 5,
        shadowColor: 'rgba(0,0,0, .4)', 
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1, 
        shadowRadius: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    column:{
    
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        
    },
    orderid:{
        color: '#043B6F',
        fontWeight:'500',
        fontSize: 20,
    },
    category:{
        color:'#6e6b6b',
        fontSize: 14,
    },
    status:{
        backgroundColor: '#caffb0',
        marginLeft: 15,
        paddingVertical: 3,
        paddingHorizontal:2,
        fontSize: 12,
    },
    detail:{
        color:'#000000',
        fontSize: 14,
    },
});

export default completed;