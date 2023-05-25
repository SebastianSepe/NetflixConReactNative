import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Button } from "react-native";

import Header from "../../components/headerComponents/Header";
import List from "../../components/headerComponents/List";
import Carousel from "../../components/Slider";

const CatalogueScreen = () => {

  return (
      <SafeAreaView style={styles.container}>

        {/* <Header /> */}
        {/* <Carousel />
        <List /> */}
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CatalogueScreen;