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
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
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

        <Text style={styles.little}>
          Let us know how to properly address you
        </Text>

        <View style={styles.inputCont}>
          <Text style={styles.flable}>First Name</Text>
          <TextInput
            style={styles.finput}
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <Text style={styles.llable}>Last Name</Text>
          <TextInput
            style={styles.linput}
            placeholder="Enter last name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <Text style={styles.elable}>Email</Text>
          <TextInput
            style={styles.einput}
            placeholder="Enter mail address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
      </TouchableWithoutFeedback>

      <Button
        title="Continue"
        onPress={() => navigation.navigate("CProfile")}
      />
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
  little: {
    fontSize: 15,
    color: "#767676",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 400,
    width: 250,
    height: 15,
    top: -90.11,
    right: -10,
    horizontalAlign: "center",
  },
  inputCont: {
    marginBottom: 200,
    top: -50,
  },
  flable: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 6,
    color: "#767676",
    zIndex: 1,
    position: "absolute",
    top: 9,
    left: 12,
  },
  finput: {
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
  llable: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 15,
    color: "#767676",
    zIndex: 1,
    position: "absolute",
    top: 80,
    left: 12,
  },
  linput: {
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
    marginTop: 15,
    marginBottom: 15,
  },
  elable: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 6,
    color: "#767676",
    zIndex: 1,
    position: "absolute",
    top: 150,
    left: 12,
  },
  einput: {
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
