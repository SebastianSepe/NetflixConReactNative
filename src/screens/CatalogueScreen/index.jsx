import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Header from "../../components/headerComponents/Header"
import List from "../../components/headerComponents/List";
import Menu from "../../components/Menu";
import SideMenu from "react-native-side-menu";
import Carousel from "../../components/Slider";

const CatalogueScreen = React.memo(() => {
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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CatalogueScreen;
