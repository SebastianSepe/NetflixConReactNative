import React from "react";
import { Image, TouchableOpacity, SafeAreaView, TouchableNativeFeedback, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import Menu from "../../Menu";

const Header = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("SearchInCatalogue");
  };

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableNativeFeedback onPress={handleMenuPress}>
        <Icon name="bars" color="white" size={25} />
      </TouchableNativeFeedback>
      <Image
        style={styles.logo}
        source={require("../../../assets/imgs/logo.png")}
      />
      <TouchableOpacity onPress={handleSearchPress}>
        <Icon name="search" color="white" size={25} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
