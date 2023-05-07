import * as React from "react";

import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import SelectionScreen from "../SelectionScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "../../customObjects/Buttons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();

function HomeScreen({onUserLogin}) {
  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <ImageBackground
          source={require("../../assets/imgs/background.jpg")}
          resizeMode="cover"
          style={styles.homeImageBackground}
        >
          <View style={styles.homeTitleAndPlaceholder}>
          <Image style={styles.logo} source={require("../../assets/imgs/logo.png")} />
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

          <View style={styles.homeButtonLogin}>
            <SignIn onPress={() => onUserLogin()} text="SIGN IN" />
            <View style={styles.homeSignup}>
              <Text style={styles.homeSignUpQuestion}>
                Don't have an account?
              </Text>
              <Button title="Sign UP" style={styles.homeSignUpButton} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
  },

  homeContainer: {
    flex: 1,
  },

  homeImageBackground: {
    flex: 1,
    justifyContent: "center",
    zIndex: 1,
    opacity: 0.9,
  },

  homeTitleAndPlaceholder: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  homeTitle: {
    marginBottom: 100,
    fontSize: 85,
    fontWeight: "600",
    color: "#ff0000",
    textAlign: "center",
    justifyContent: "center",
  },

  logo: {
    width: 380,
    height: 150,
  },

  homeLoginInput: {
    borderColor: "white",
    width: "80%",
    paddingStart: 30,
    borderRadius: 25,
    backgroundColor: "#87cefa",
    paddingVertical: 15,
    margin: 12,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    opacity: 0.9,
  },

  homeButtonLogin: {
    flex: 1,
    width: "100%",
    height: "auto",
    marginBottom: 50,
    opacity: 0.9,
    marginTop: 40,
  },

  homeSignup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  homeSignUpQuestion: {
    color: "white",
    fontSize: 14,
  },

  homeSignUpButton: {},

  ///////

  homeTitleAndPlaceholder: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  subtitleHome: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 20,
    color: "navy",
  },
  imageHome: {
    marginBottom: 20,
  },
});
