import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function Code({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("CompleteProfile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
