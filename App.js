import * as React from "react";
import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import Header from "./src/components/Header";
import List from "./src/components/List";
import Menu from "./src/components/Menu";
import SideMenu from "react-native-side-menu";
import SelectionScreen from "./src/screens/SelectionScreen";



import HomeScreen from "./src/screens/HomeScreen";
import colors from "./src/constantes/colors";
import Slider from "./src/components/Slider";

export default function App() {
  const [isUser, setIsUser] = useState(false);

  const handleLogIn = () => {
    setIsUser(true);
  };

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const updateMenu = (newIsOpen) => {
    setIsOpen(newIsOpen);
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle={"light-content"} />
      {isUser ? (
          <SelectionScreen />
      ) : (
        <HomeScreen onUserLogin={handleLogIn} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: colors.backgroundPrimary,
  },
});
