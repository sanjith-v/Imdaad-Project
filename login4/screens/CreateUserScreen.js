import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import firebase from "../database/firebase";

const CreateUserScreen = (props) => {

    const initialState = {
        name: "",
        email: "",
      };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const saveNewUser = async () => {
        Keyboard.dismiss()
        if (state.name === "") {
          alert("please provide a name");
        } else {
    
          try {
            await firebase.db.collection("users").add({
              name: state.name,
              email: state.email,
            });
    
            props.navigation.navigate("UsersList");
          } catch (error) {
            console.log(error)
          }
        }
      };

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.sectionTitle}> Welcome to registration </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.form}> Full name: </Text>
                <TextInput style={styles.input} onChangeText={(value) => handleChangeText(value, "name")} placeholder={'Enter your name'}/>
                <Text style={styles.form} > Email address: </Text>
                <TextInput style={styles.input} onChangeText={(value) => handleChangeText(value, "email")} placeholder={'Enter your email address'}/>
                <TouchableOpacity onPress={() => saveNewUser()} >
                    <Text style={styles.submit}>Click to create user </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    
    sectionTitle: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: '#55BCF6',
      paddingVertical: 10,
      
    },
    body: {
      paddingHorizontal: 20,
    },
    form: {
      textAlign: 'left',
      fontSize: 18,
      marginTop: 30,
      paddingBottom:5,
  
    },
    input: {
      paddingHorizontal: 5,
      paddingVertical: 15,
      backgroundColor: '#FFF',
      borderRadius: 5,
      borderColor: '#C0C0C0',
      borderWidth: 1,
  
    },
    
    submit: {
      textAlign: 'center',
      paddingVertical: 15,
      backgroundColor: '#55BCF6',
      marginTop: 30,
      borderRadius: 5,  
   
   },
  });

export default CreateUserScreen;