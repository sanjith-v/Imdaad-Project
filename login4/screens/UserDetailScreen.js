import React, {useState, useEffect} from 'react';
import { ScrollView, Button, View, Alert, Text, ActivityIndicator, StyleSheet, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../database/firebase";

const UserDetailScreen = (props) => {
  const initialState = {
    id: "",
    name: "",
    email: "",
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };

  const deleteUser = async () => {
    setLoading(true)
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    setLoading(false)
    props.navigation.navigate("UsersList");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      "Removing the User",
      "Are you sure?",
      [
        { text: "Yes", onPress: () => deleteUser() },
        { text: "No", onPress: () => console.log("canceled") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const updateUser =  async () => {
    const userRef = firebase.db.collection("users").doc(user.id);
    await userRef.set({
      name: user.name,
      email: user.email,
    });
    setUser(initialState);
    props.navigation.navigate("UsersList");
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          autoCompleteType="username"
          style={styles.inputGroup}
          value={user.name}
          onChangeText={(value) => handleTextChange(value, "name")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="email"
          style={styles.inputGroup}
          value={user.email}
          onChangeText={(value) => handleTextChange(value, "email")}
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => openConfirmationAlert()} >
        <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => updateUser()}>
          <Text style={styles.update}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    paddingHorizontal: 5,
      paddingVertical: 15,
      backgroundColor: '#FFF',
      borderRadius: 5,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      marginBottom: 5,
  },
  btn: {
    marginBottom: 7,
  },
  update: {
    textAlign: 'center',
    paddingVertical: 15,
    backgroundColor: '#04b831',
    marginTop: 5,
    borderRadius: 5,  
 },
  delete: {
  textAlign: 'center',
  paddingVertical: 15,
  backgroundColor: '#E37399',

  borderRadius: 5,  
},
});

export default UserDetailScreen;