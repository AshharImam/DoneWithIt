import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
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
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, World!</Text>
      <TouchableOpacity onPress={() => console.log("Image pressed")}>
        <View>
          <TextInput
            placeholder="Enter Your Name"
            onChange={(text) => {
              console.log(text);
            }}
            style={{
              height: 40,
              backgroundColor: "dodgerblue",
              paddingBottom: 10,
            }}
          />
          <Button
            title="Upload Image"
            onPress={() =>
              Alert.alert("My Title", "Button Pressed", [
                { text: "Yes" },
                { text: "No" },
              ])
            }
          />
        </View>
        {/* <Image
          source={{
            width: 200,
            height: 300,
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaCo8w-i_zVTMXXhSFozoAPIS-643psWtfTg&usqp=CAU",
          }}
        /> */}
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
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
