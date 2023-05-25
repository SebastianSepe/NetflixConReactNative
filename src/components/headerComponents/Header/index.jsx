import * as React from 'react';
import { Image, TouchableOpacity, SafeAreaView, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation, DrawerActions } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import styles from "./styles";

const Drawer = createDrawerNavigator();

const size = 24
const color = "white"

const Header = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("SearchInCatalogue");
  };

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress}>
      <FontAwesome5 name="bars" size={size} color={color}/>
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={require("../../../assets/imgs/logo.png")}
      />
      <TouchableOpacity onPress={handleSearchPress}>
      <FontAwesome5 name="search" size={size} color={color} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
