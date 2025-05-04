import {
  Text,
  View,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "../components/Button";
//import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CountryCodeDropdownPicker from "react-native-dropdown-country-picker";

export default function PhoneScreen({ navigation }) {
  const [selected, setSelected] = React.useState("+233");
  const [phone, setPhone] = React.useState("");
  const [country, setCountry] = React.useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/Logo1.png")} style={styles.image} />

      <Text style={styles.text}>PickEAT PickIT</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.prow}>
          <CountryCodeDropdownPicker
            selected={selected}
            setSelected={setSelected}
            setCountryDetails={setCountry}
            phone={phone}
            setPhone={setPhone}
            countryCodeContainerStyles={styles.countryCodeContainerStyle}
            countryCodeTextStyles={styles.countryCodeTextStyle}
            phoneStyles={styles.phoneStyle}
            phoneInputContainerStyles={styles.phoneInputContainerStyle}
            dropdownStyles={styles.dropdownStyle}
            dropdownTextStyles={styles.dropdownTextStyle}
            searchStyles={styles.searchStyle}
          />
        </View>
      </TouchableWithoutFeedback>

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

      <Button
        title="Continue"
        onPress={() => navigation.navigate("Code", { phone })}
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
    paddingHorizontal: 30,
    marginTop: 300,
    top: -150,
    marginBottom: 90,
  },

  countryCodeContainerStyle: {
    //flexDirection: "row",
    //alignItems: "center",
    backgroundColor: "#E9E9E9",
    borderColor: "#228B22",
    elevation: 3, // Shadow effect for better visibility
  },
  countryCodeTextStyle: {
    fontSize: 12,
    fontWeight: "600",
    color: "black",
    //marginLeft: 2, // Space between flag and country code
  },
  phoneInputContainerStyle: {
    //flexDirection: "row",
    //alignItems: "center",
    backgroundColor: "#E9E9E9",
    //padding: 10,
    //borderRadius: 8,
    borderWidth: 1,
    borderColor: "#228B22",
    //elevation: 3, // Matches the country code container
    //width: "100%",
    //height: "100%", // Ensures proper layout in different screen sizes
  },
  phoneStyle: {
    backgroundColor: "#E9E9E9",
    borderWidth: 1,
    borderColor: "#228B22",
    padding: 10,
    elevation: 3,
  },
  dropdownStyle: {
    backgroundColor: "#E9E9E9",
    borderWidth: 1,
    borderColor: "#228B22",
    elevation: 3, // Shadow effect for better visibility
  },
  dropdownTextStyle: {
    fontSize: 12,
    fontFamily: "Aroma",
    fontWeight: "600",
    color: "Internal",
  },
  searchStyle: {
    backgroundColor: "#E9E9E9",
    borderWidth: 1,
    padding: 10,
    borderColor: "#228B22",
    elevation: 3, // Shadow effect for better visibility
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
