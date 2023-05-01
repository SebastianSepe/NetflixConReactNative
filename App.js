import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import Header from "./src/components/Header";
import List from "./src/components/List";
import Menu from "./src/components/Menu";
import SideMenu from "react-native-side-menu";
import Slider from "./src/components/Slider";
import Lista from "./src/components/AddItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenu(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    return (
      <SafeAreaView style={{flex:1, backgroundColor:"black"}} >
        <StatusBar barStyle={"light-content"} />
        <View style={{flex: 1}}>
          <SideMenu
            menu={<Menu />}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenu(isOpen)}
          >
            <Header toggle={this.toggle.bind(this)} />
            <Slider />
            <List />
          </SideMenu>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: "black",
  },
});

//         />

{
  /* <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Homeee" }}
    ></Stack.Screen>
    <Stack.Screen
      name="MovieAndSeries"
      component={MoviesAndSeriesScreen}
    ></Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>; */
}
