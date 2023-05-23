import React from "react";
import { Image, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import styles from "./styles";

const Header = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("SearchInCatalogue");
  };

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleMenu = () =>{ navigation.openDrawer() }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress}>
        <Icon name="bars" color="white" size={25} />
      </TouchableOpacity>
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
