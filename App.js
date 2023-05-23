import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import CategorysViewScreen from "./src/screens/CatalogueScreen";
import HomeScreen from "./src/screens/HomeScreen";
import colors from "./src/constantes/colors";
import DrawerNavigator from "./src/components/drawerNavigation";

import StackNavigator from "./src/stackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CatalogueScreen from "./src/screens/CatalogueScreen";


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
        {isUser ? <View><Text>Texto</Text></View> : <HomeScreen onUserLogin={handleLogIn} />}
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
