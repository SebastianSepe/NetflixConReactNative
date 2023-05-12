import { Image, TouchableWithoutFeedback, View, SafeAreaView, Animated } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import styles from "./styles";

const Header = (props) => {
  const [animationValue, setAnimationValue] = useState(new Animated.Value(0));

  Animated.timing(animationValue, {
    useNativeDriver: true,
  }).start();

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ transform: [{ translateX: animationValue }] }}>
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
          <Icon name="bars" color="white" size={25} />
        </TouchableWithoutFeedback>
      </Animated.View>
      <Image style={styles.logo} source={require("../../assets/imgs/logo.png")} />
      <Icon name="search" color="white" size={25} />
    </SafeAreaView>
  );
};

export default Header;