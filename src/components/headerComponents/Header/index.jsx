import {
  Image,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import styles from "./styles";
import SearchInCatalogue from "../../ApiComponente/SearchInCatalogue";
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
  const [animationValue, setAnimationValue] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  Animated.timing(animationValue, {
    useNativeDriver: true,
  }).start();

  const handleSearchPress = () => {
    navigation.navigate('SearchInCatalogue');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ transform: [{ translateX: animationValue }] }}>
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
          <Icon name="bars" color="white" size={25} />
        </TouchableWithoutFeedback>
      </Animated.View>
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