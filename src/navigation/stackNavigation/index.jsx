import CatalogueScreen from "../../screens/CatalogueScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import DrawerNavigator from "../drawerNavigation";
import MovieList from "../../components/MovieList";
import React from "react";
import SearchInCatalogue from "../../components/ApiComponente/SearchInCatalogue";
import VideoPlayerScreen from "../../screens/VideoPlayerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name="MovieList" component={MovieList} />
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
  );
};

export default StackNavigator;
