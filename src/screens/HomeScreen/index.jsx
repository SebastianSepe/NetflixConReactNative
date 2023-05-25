import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";

import { SignIn } from "../../customObjects/Buttons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
import styles from "./styels";

const Stack = createNativeStackNavigator();

function HomeScreen({ onUserLogin }) {
  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <ImageBackground
          source={require("../../assets/imgs/background.jpg")}
          resizeMode="cover"
          style={styles.homeImageBackground}
        >
          <View style={styles.homeTitleAndPlaceholder}>
            <Image
              style={styles.logo}
              source={require("../../assets/imgs/logo.png")}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={"#f1f1f1"}
              style={styles.homeLoginInput}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={"#f1f1f1"}
              style={styles.homeLoginInput}
            />
          </View>

          <View style={styles.homeButtonSignIn}>
            <SignIn onPress={() => onUserLogin()} text="SIGN IN" />
            <View style={styles.homeSignup}>
              <Text style={styles.homeSignUpQuestion}>
                Don't have an account?
              </Text>
              <Button title="Sign UP" />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

export default HomeScreen;
