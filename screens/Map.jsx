import { View, Text ,StyleSheet,TouchableOpacity, Keyboard} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableWithoutFeedback , TextInput} from 'react-native-gesture-handler'

export default function Map({navigation}) {
  return (
    <View style={styles.container}>
     <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Text style={styles.title}>Set delivery address</Text>
             
          </TouchableWithoutFeedback>
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
 })