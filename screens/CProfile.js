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
//import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import React from "react";
import useLocation from "../components/location";

export default function CProfile({ navigation }) {
  const [email, setEmail] = useState("");
  const { address, errorMsg } = useLocation();

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
          {email === "" && (
            <EvilIcons
              style={styles.search}
              name="search"
              size={24}
              color="black"
            />
          )}
          <TextInput
            style={[styles.input, email.length > 0 && { paddingLeft: 10 }]}
            placeholder={email === "" ? "Enter a new address" : ""}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </TouchableWithoutFeedback>
      <View>
        <View style={styles.greenCont}>
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={24}
            color="black"
            style={{ color: "#767676" }}
          />
          <Text
            style={styles.green}
            onPress={() => console.log("choosing map from app")}
          >
            Choose from app
          </Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.location}>
          <EvilIcons name="location" size={24} color="#767676" />
          <Text style={styles.locationText}>Current location</Text>
          <Text style={styles.loc}>
            {errorMsg ? errorMsg : address || "locating..."}
          </Text>
        </View>
      </View>

      <Button title="Select" onPress={() => navigation.navigate("Map")} />
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
    marginBottom: 300,
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
  greenCont: {
    flexDirection: "row",
    alignItems: "center",
    //marginBottom: 20,
    bottom: 320,
  },
  green: {
    fontSize: 16,
    fontFamily: "Inter",
    color: "#228B22",
    fontWeight: "bold",
    marginLeft: 10,
    left: 5,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#767676",
    marginVertical: 10,
    bottom: 310,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 300,
  },
  locationText: {
    fontSize: 12,
    fontFamily: "Inter",
    color: "#767676",
    fontWeight: "500",
    marginLeft: 10,
    left: 3,
    bottom: 12,
  },
  loc: {
    fontFamily: "Inter",
    fontSize: 15,
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
    left: -85,
    top: 7,
  },
});
