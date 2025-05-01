import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
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
          {firstName === "" && (
            <EvilIcons
              style={styles.search}
              name="search"
              size={24}
              color="black"
            />
          )}
          <TextInput
            style={styles.input}
            placeholder={firstName === "" ? "Enter a new address" : ""}
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
    marginBottom: 360,
    top: -90,
  },
  search: {
    position: "absolute",
    top: 17,
    left: 10,
    zIndex: 1,
    color: "#228B22",
    fontSize: 25,
  },

  input: {
    height: 50,
    borderColor: "#767676",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 45,
    paddingTop: "auto",
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#E9E9E9",
    fontWeight: "confident",
  },
});
