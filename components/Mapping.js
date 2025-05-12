import { AppleMaps, GoogleMaps } from "expo-maps";
import { Platform, Text, StyleSheet } from "react-native";

export default function Map() {
  if (Platform.OS === "ios") {
    return (
      <AppleMaps.View
        style={{ flex: 1 }}
        cameraPosition={{
          center: { latitude: 37.78825, longitude: -122.4324 },
          zoom: 10,
        }}
      />
    );
  } else if (Platform.OS === "android") {
    return <GoogleMaps.View style={{ flex: 1 }} />;
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}
