import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import colors from "./src/constantes/colors";


import StackNavigator from "./src/navigation/stackNavigation";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  const [isUser, setIsUser] = useState(false);
  

  const handleLogIn = () => {
    setIsUser(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const updateMenu = (newIsOpen) => {
    setIsOpen(newIsOpen);
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <StatusBar barStyle={"light-content"} />
        {isUser ? <StackNavigator /> : <HomeScreen onUserLogin={handleLogIn} />}
      </SafeAreaView>
    </NavigationContainer>
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
