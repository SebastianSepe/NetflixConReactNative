import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CatalogueScreen from "../../screens/CatalogueScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import MovieList from "../../components/MovieList";
import VideoPlayerScreen from "../../screens/VideoPlayerScreen";
import SearchInCatalogue from "../../components/ApiComponente/SearchInCatalogue";
import DrawerNavigator from "../drawerNavigation";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />

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
      {/* <Stack.Screen name="MovieList" component={MovieList} /> */}
      {/* <Stack.Screen
          name="SearchInCatalogue"
          component={SearchInCatalogue}
          options={{
            title: null,
            headerTransparent: true,
            headerTintColor: "white",
          }}
        /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
