import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import CategorysViewScreen from "./src/screens/CatalogueScreen";
import HomeScreen from "./src/screens/HomeScreen";
import colors from "./src/constantes/colors";

import FilmsNavigator from "./src/navigation";


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
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle={"light-content"} />
      {isUser ? (
          <FilmsNavigator />
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
