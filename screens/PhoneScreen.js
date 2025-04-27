import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

export default function PhoneScreen(navigation) {
  const [phone, setPhone] = useState("");
  const [selectedCode, setSelectedCode] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/Logo1.png")} style={styles.image} />

      <View>
        <Picker
          selectedValue={selectedCode}
          onValueChange={(itemValue) => setSelectedCode(itemValue)}
        >
          <Picker.Item label="Select your country" value="" />
          <Picker.Item label="+333" value="US" />
          <Picker.Item label="+233" value="CA" />
          <Picker.Item label="+234" value="MX" />
        </Picker>
        <TextInput
          style={styles.phon}
          onChangeText={(text) => setPhone(text)}
          value={phone}
          placeholder="Enter your phone number"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.text}>PickEAT PickIT</Text>

      <Button
        title="Continue"
        onPress={() => navigation.navigate("CompleteProfile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 192.08145141601562,
    height: 150,
    top: 64,
    left: 99,
  },
  text: {
    width: 151,
    height: 24,
    top: -7,
    left: 145,
    fontSize: 20,
    fontWeight: 900,
    color: "#228B22",
  },
  phon: {
    width: 300,
    height: 55,
    backgroundColor: "#E9E9E9",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
    marginLeft: 60,
  },

  pen: {
    marginRight: 20,
  },
});
