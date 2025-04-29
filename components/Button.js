import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 55,
    backgroundColor: "#228B22",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
    alignSelf: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 500,
  },
});
