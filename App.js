import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import HomeScreen from "./src/screens/HomeScreen";
import StackNavigator from "./src/navigation/stackNavigation";
import colors from "./src/constantes/colors";

import { createStore, combineReducers } from "redux";
import movieListReducer from "./src/store/reducers/movieList.reducer";

const rootReducer = combineReducers({
  movies: movieListReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [isUser, setIsUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogIn = () => {
    setIsUser(true);
  };

  const updateMenu = (newIsOpen) => {
    setIsOpen(newIsOpen);
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <StatusBar barStyle={"light-content"} />
          {isUser ? (
            <StackNavigator />
          ) : (
            <HomeScreen onUserLogin={handleLogIn} />
          )}
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: colors.backgroundPrimary,
  },
});
