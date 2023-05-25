import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Carousel from "../../components/Slider";
import Header from "../../components/headerComponents/Header";
import List from "../../components/headerComponents/List";

const CatalogueScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Carousel />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CatalogueScreen;
