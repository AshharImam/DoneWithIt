import React, { useState } from "react";
import { FlatList } from "react-native";
import { Picker } from "@react-native-community/picker";

import Screen from "./app/Components/Screen";
import AppTextInput from "./app/Components/AppTextInput";
import colors from "./app/config/colors";
import MessagesScreen from "./app/screens/MessagesScreen";

const languages = [
  {
    id: 1,
    name: "Java",
    value: "java",
  },
  {
    id: 2,
    name: "Javascript",
    value: "javascript",
  },
];

export default function App() {
  const [language, setLanguage] = useState("java");
  return (
    <MessagesScreen />
    // <Screen>
    //   <Picker
    //     mode="dropdown"
    //     selectedValue={language}
    //     style={{
    //       height: 50,
    //       width: "100%",
    //       backgroundColor: colors.white,
    //       borderRadius: 25,
    //       borderBottomColor: colors.light,
    //       borderBottomWidth: 1,
    //     }}
    //     onValueChange={(itemValue) => setLanguage(itemValue)}
    //   >
    //     <Picker.Item label="Java" value="java" />
    //     <Picker.Item label="JavaScript" value="js" />
    //   </Picker>
    //   <AppTextInput placeholder="Email" />
    // </Screen>
  );
}
