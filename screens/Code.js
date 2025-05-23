import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Button from "../components/Button";
//import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Code({ navigation, route }) {
  const { phone } = route.params;
  const { country } = route.params;
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verificationId, setVerificationId] = useState(""); // the verification ID from Firebase
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text.length === 1 && index < 3) {
      // Move to the next input field
      inputRefs.current[index + 1]?.focus();
    }
    if (text.length === 0 && index > 0) {
      // Move to the previous input field
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={styles.title}>Enter code</Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            // <TouchableWithoutFeedback onPress={Keyboard.dismiss} key={index}>
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
            //  </TouchableWithoutFeedback>
          ))}
        </View>

        <Text style={styles.subtitle}>
          Enter the four digit code sent to{" "}
          <Text style={{ fontWeight: "bold" }}>{phone}</Text> {country}{" "}
        </Text>
      </TouchableWithoutFeedback>

      <Button
        title="Continue"
        onPress={() => navigation.navigate("CompleteProfile")}
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
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#228B22",
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: "#E9E9E9",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 295,
    fontFamily: "Inter",
    color: "#7a7a7a",
  },
});
