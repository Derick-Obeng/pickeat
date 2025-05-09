import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Map({navigation}) {
  return (
    <View>
     <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
          </TouchableWithoutFeedback>
    </View>
  )
}