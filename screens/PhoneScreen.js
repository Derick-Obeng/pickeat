import { Text, View, StyleSheet, Image, Keyboard } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

export default function PhoneScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [selectedCode, setSelectedCode] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/Logo1.png")} style={styles.image} />

      <Text style={styles.text}>PickEAT PickIT</Text>

      <View style={styles.prow}>
        <View>
          <Picker
            style={styles.codebox}
            selectedValue={selectedCode}
            onValueChange={(itemValue) => setSelectedCode(itemValue)}
            itemStyle={{ fontSize: 12, fontFamily: "Inter" }}
          >
            <Picker.Item label="+1" value="GH" />
            <Picker.Item label="+333" value="US" />
            <Picker.Item label="+233" value="CA" />
            <Picker.Item label="+234" value="MX" />
          </Picker>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <TextInput
            style={styles.phon}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            placeholder=" phone number"
            keyboardType="numeric"
          />
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.small}>
        By continuing you agree to our{" "}
        <Text style={styles.link} onPress={() => console.log("Terms clicked")}>
          Terms
        </Text>{" "}
        and{" "}
        <Text
          style={styles.link}
          onPress={() => console.log("Conditions clicked")}
        >
          condition{" "}
        </Text>
        and the {""}
        <Text
          style={styles.link}
          onPress={() => console.log("Privacy clicked")}
        >
          privacy Policy
        </Text>
      </Text>

      <Button title="Continue" onPress={() => navigation.navigate("Code")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 192.08145141601562,
    height: 150,
    top: 64,
    left: 120,
    alignItems: "center",
  },
  text: {
    width: 151,
    height: 24,
    top: 65,
    left: 150,
    fontSize: 20,
    fontWeight: 900,
    color: "#228B22",
  },
  prow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  codebox: {
    marginTop: -75,
    backgroundColor: "#E9E9E9",
    paddingHorizontal: 5,
    paddingVertical: 2,
    justifyContent: "center",
    marginRight: -40,
    width: 100,
    height: 55,
    borderRadius: 15,
  },
  phon: {
    width: 230,
    height: 55,
    backgroundColor: "#E9E9E9",
    borderRadius: 15,
    marginTop: 120,
    marginLeft: 50,
    marginBottom: 210,
    textAlign: "justify",
    paddingLeft: 10,
  },
  small: {
    width: 310,
    height: 12,
    fontSize: 9,
    fontWeight: 500,
    letterSpacing: 0.15,
    lineHeight: 10,
    color: "#000000",
    marginLeft: 50,
    top: 20,
    fontFamily: "Open Sans",
  },
  link: {
    color: "#228B22",

    textDecorationLine: "none",
  },
});
