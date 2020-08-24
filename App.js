// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  Button,
  Alert,
  TextInput,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          fontSize: 20,
          justifyContent: "center",
        }}
      >
        Hello, World!
      </Text> */}
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 3, backgroundColor: "tomato" }} />
        <View style={{ flex: 1, backgroundColor: "orange" }} />
        <View style={{ flex: 1, backgroundColor: "yellow" }} />
        <View style={{ flex: 1, backgroundColor: "dodgerblue" }} />
      </View>
      <View style={{ flex: 1, backgroundColor: "black" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
