import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import firebase from "/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/database/firebase.js";


const home = ({ navigation }) => {
    const [ctr, setCounter]=useState(0)
    const [un, setUn]=useState(0)
    const [comp, setComp]=useState(0)
    const [tech, setTech]=useState(0)

    useEffect(() => {
        firebase.db.collection("workorders").get().then(function(querySnapshot) {      
            setCounter(querySnapshot.size); 
        });
        firebase.db.collection("workorders").where("Status", "==", "Completed").get().then(function(querySnapshot) {      
            setComp(querySnapshot.size); 
        });
        firebase.db.collection("workorders").where("Status", "==", "Unassigned").get().then(function(querySnapshot) {      
            setUn(querySnapshot.size); 
        });
        firebase.db.collection("users").where("Role", "==", "Technician").get().then(function(querySnapshot) {      
            setTech(querySnapshot.size); 
        });

    }, []);
    return (
    <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("workorders")}>
            <Icon name='clipboard' type='font-awesome' color="#CEA870" size={50} style={{marginTop:10}}/>
                <Text style={styles.title}> Workorders</Text>
                <Text style={styles.count}>{ctr} Workorders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("unassigned")}>
            <Icon name='wrench' type='font-awesome' color="#CEA870" size={50} style={{marginTop:10}} />
                <Text style={styles.title}>Unassigned workorders</Text>
                <Text style={styles.count}>{un} Workorders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("completed")}>
            <Icon name='thumbs-up' type='font-awesome' color="#CEA870" size={50} style={{marginTop:10}}/>
                <Text style={styles.title}> Field completed</Text>
                <Text style={styles.count}>{comp} Workorders</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.box} onPress={() => navigation.navigate("technicians")}>
            <Icon name='address-book' type='font-awesome' color="#CEA870" size={50} style={{marginTop:10}} />
                <Text style={styles.title}>Technicians </Text>
                <Text style={styles.count}>{tech} Workorders</Text>
            </TouchableOpacity>
        </View>
    </View>
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

    box: {
        marginLeft: 15,
        marginTop:10,
        paddingVertical: 15,
        width: '45%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 5, 
       },

})

export default home;