import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import React from "react";

export default function CompleteProfile({ navigation }) {
  const [firstName, setFirstName] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={styles.title}>Complete Profile</Text>

        <View style={styles.inputCont}>
          <Text style={styles.lable}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
      </TouchableWithoutFeedback>

      <Button title="Continue" onPress={() => navigation.navigate("")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  backButton: { marginTop: 20 },
  title: {
    fontSize: 24,
    top: -40,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    marginBottom: 100,
    fontFamily: "Inter",
  },
  inputCont: {
    marginBottom: 20,
  },
  lable: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 6,
    color: "#767676",
    zIndex: 1,
    position: "absolute",
    top: 8,
    left: 12,
  },
  input: {
    height: 55,
    borderColor: "#767676",
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 10,
    paddingTop: 18,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#E9E9E9",
    fontWeight: "confident",
  },
});
