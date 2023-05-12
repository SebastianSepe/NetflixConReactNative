import React, { Component } from "react";
import { useState } from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Header from "../../components/Header";
import List from "../../components/List";
import Menu from "../../components/Menu";
import SideMenu from "react-native-side-menu";
import Carousel from "../../components/Slider";

export default function CategorysViewScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const updateMenu = (newIsOpen) => {
    setIsOpen(newIsOpen);
  };
  return (
    <SafeAreaView style={styles.container}>
        <SideMenu
          menu={<Menu />}
          isOpen={isOpen}
          onChange={(newIsOpen) => updateMenu(newIsOpen)}
        >
          <Header toggle={toggle} />
          <Carousel />
          <List />
        </SideMenu>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
