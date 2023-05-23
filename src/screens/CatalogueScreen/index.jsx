import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Header from "../../components/headerComponents/Header";
import List from "../../components/headerComponents/List";
import Menu from "../../components/Menu";
import Carousel from "../../components/Slider";

const CatalogueScreen = React.memo(() => {
  const Drawer = createDrawerNavigator();

  return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Carousel />
        <List />
      </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CatalogueScreen;
