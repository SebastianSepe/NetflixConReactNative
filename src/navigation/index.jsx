import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CatalogueScreen from "../screens/CatalogueScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MovieList from "../components/MovieList";
import VideoPlayerScreen from "../screens/VideoPlayerScreen";
import SearchInCatalogue from "../components/ApiComponente/SearchInCatalogue";

const FilmsNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={CatalogueScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: null,
            headerTransparent: true,
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PlayVideo"
          component={VideoPlayerScreen}
          options={{
            title: null,
            headerTransparent: true,
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="SearchInCatalogue"
          component={SearchInCatalogue}
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
