import React, { Component } from 'react'
import { useState } from "react";

import { StyleSheet, Text, View } from 'react-native'

import Header from '../../components/Header';
import List from '../../components/List';
import Menu from '../../components/Menu';
import SideMenu from "react-native-side-menu";
import Slider from '../../components/Slider';


export default function SelectionScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const updateMenu = (newIsOpen) => {
    setIsOpen(newIsOpen);
  };
    return (
      <View style={styles.container}>
        <SideMenu
            menu={<Menu />}
            isOpen={isOpen}
            onChange={(newIsOpen) => updateMenu(newIsOpen)}
          >
            <Header toggle={toggle} />
            <Slider /> 
            <List />
          </SideMenu>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
  
})