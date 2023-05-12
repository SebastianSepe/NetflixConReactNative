import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategorysViewScreen from "../screens/CategorysViewScreen";
import FilmsOrSerieDetailScreen from "../screens/FilmsOrSerieDetailScreen";
import MovieList from "../components/MovieList";

const FilmsNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={CategorysViewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen
          name="Details"
          component={FilmsOrSerieDetailScreen}
          options={{
            title: null,
            headerTransparent: true,
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FilmsNavigator;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  // },
});
