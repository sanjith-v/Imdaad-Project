import React, {useState, useEffect, useContext} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, Animated,ImageBackground, TouchableOpacity, Keyboard, Image, Button, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';


const login = (props) => {

  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {logging} = useContext(AuthContext);
  

    return(
      <ImageBackground source={require('/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/assets/drawable-hdpi/bg.jpg')} style={styles.container} >
        <View style={styles.content}>
        <View style={styles.image}>
          <Image source={require('/Users/sanjithkrishna/Desktop/Coding/Macapp/superv/assets/drawable-hdpi/logo.png')} />
          </View>
          <Text style={styles.sectionTitle}>LOGIN</Text>
          <Text style={styles.subtitle}>Please enter your credentials to login</Text>
          <View style={{backgroundColor:'#E8EAED'}}>
                <TextInput style={styles.input}  placeholder={'Email ID'} onChangeText={(value) => setEmail(value)} left={<TextInput.Icon name="clipboard" />}/>
                <TextInput style={styles.input} placeholder={'Password'} onChangeText={(value) => setPassword(value)} secureTextEntry left={<TextInput.Icon name="lock"/>}/>
                <TouchableOpacity style={styles.btn} onPress={() => logging(email,password)} >
                    <Text style={styles.submit} >LOGIN </Text>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    )
}
//onPress={() => saveNewUser()}
const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    content:{
      elevation: 5,
      shadowColor: 'rgba(0,0,0, .4)', 
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1, 
      shadowRadius: 1,
      marginTop: '60%',
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#fff',

    },

    image: {
      paddingHorizontal: '30%', 
      justifyContent: 'space-around',
      
    },
    
    sectionTitle: {
      textAlign: 'center',
      fontSize: 18,
      paddingVertical: 5,
      fontWeight: '500',
      },

      subtitle: {
        marginBottom: 5,
        textAlign: 'center',
        color:'#918f8d', 
        
        fontSize: 12,
      },

    input: {
      marginBottom: 2,
      paddingHorizontal: 5, 
      height: 35, 
      backgroundColor: '#FFF',
      borderRadius: 3,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      
    },
    
    btn:{
      backgroundColor: '#FFF',
    },
    submit: {
      textAlign: 'center',
      paddingVertical: 10,
      backgroundColor: '#CEA870',
      borderRadius: 5,  
      color: 'white',
      fontSize: 18,
      marginTop:20,
      elevation: 5,
        shadowColor: 'rgba(0,0,0, .4)', 
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1, 
        shadowRadius: 1,
   },

  });

export default login;