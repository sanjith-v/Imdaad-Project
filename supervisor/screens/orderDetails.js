import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import firebase from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/database/firebase.js";


const orderDetails = (props) => {
    const initialState = {
        id: "",
      };
      const [workorder, setWorkOrder] = useState(initialState);

      const getOrderById = async (id) => {
        const dbRef = firebase.db.collection("workorders").doc(id);
        const doc = await dbRef.get();
        const workorder = doc.data();
        setWorkOrder({ ...workorder, id: doc.id });
      };

      useEffect(() => {
        getOrderById(props.route.params.workOrderId);
      }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.orderid}>Order ID</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.category}>Project</Text>
                    <Text style={styles.category}>Client</Text>
                    <Text style={styles.category}>Client Ref</Text>
                    <Text style={styles.category}>Location</Text>
                    <Text style={styles.category}>Worktype</Text>
                    <Text style={styles.category}>Description</Text>
                    <Text style={styles.category}>Skill</Text>
                    <Text style={styles.category}>Reported by</Text>
                    <Text style={styles.category}>Contact No.</Text>
                    <Text style={styles.category}>Reported on</Text>
                    <Text style={styles.category}>Supervisor</Text>
                    <Text style={styles.category}>Lead</Text>
                    <Text style={styles.category}>Date & Time</Text>
                    <Text style={styles.category}>Asset Description</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                    <Text style={styles.category}>:</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.detail}>{workorder.Project}</Text>
                <Text style={styles.detail}>{workorder.Client}</Text>
                <Text style={styles.detail}>{workorder.Clientref}</Text>
                <Text style={styles.detail}>{workorder.Location}</Text>
                <Text style={styles.detail}>{workorder.Worktype}</Text>
                <Text style={styles.detail}>{workorder.Description}</Text>
                <Text style={styles.detail}>{workorder.Skill}</Text>
                <Text style={styles.detail}>{workorder.Reportedby}</Text>
                <Text style={styles.detail}>{workorder.Contact}</Text>
                <Text style={styles.detail}>{workorder.Reportedon}</Text>
                <Text style={styles.detail}>{workorder.Supervisor}</Text>
                <Text style={styles.detail}>{workorder.Technician}</Text>
                <Text style={styles.detail}>{workorder.Date}</Text>
                <Text style={styles.detail}>Details </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    column:{
        marginLeft: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        
    },
    row: {
        
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    orderid:{
        marginLeft: 10,
        color: '#043B6F',
        fontWeight:'500',
        fontSize: 20,
    },
   
    category:{
        color:'#6e6b6b',
        marginTop: 5,
        fontSize: 14,
    },
    detail:{
        color:'#000000',
        fontSize: 14,
        marginTop: 5,
    },

});

export default orderDetails;