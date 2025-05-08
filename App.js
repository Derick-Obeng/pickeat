import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Fresh from "./screens/Fresh";
import PhoneScreen from "./screens/PhoneScreen";
import CompleteProfile from "./screens/CompleteProfile";
import Code from "./screens/Code";
import CProfile from "./screens/CProfile";
import Map from "./screens/Map";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Fresh} name="Fresh" />
        <Stack.Screen component={PhoneScreen} name="PhoneScreen" />
        <Stack.Screen component={CompleteProfile} name="CompleteProfile" />
        <Stack.Screen component={Code} name="Code" />
        <Stack.Screen component={CProfile} name="CProfile" />
        <Stack.Screen component={Map} name="Map" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
