import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CompleteProfile(navigation) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Complete Profile</Text>

      <Text style={styles.little}>Let us know how to properly address you</Text>

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
  little: {
    fontSize: 12,
    color: "#767676",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 400,
    width: 225,
    height: 15,
    top: -90.11,
    left: 25,
    horizontalAlign: "center",
  },
});
