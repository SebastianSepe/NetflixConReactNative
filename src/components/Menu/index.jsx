import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  renderItem
} from "react-native";
import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const menuItems = [
  {
  id: "1",
  icon: "download",
  text: "My Downloads",
  },
  {
  id: "2",
  icon: "md-checkmark",
  text: "My List",
  },
  {
  id: "3",
  icon: "",
  text: "Home",
  },
  {
  id: "4",
  icon: "",
  text: "Available for Downloads",
  },
  {
  id: "5",
  icon: "",
  text: "Netflix Originals",
  },
  {
  id: "6",
  icon: "",
  text: "Tv Show",
  },
  {
  id: "7",
  icon: "",
  text: "Action & Adventure",
  },
  {
  id: "8",
  icon: "",
  text: "Children & Family Movies",
  },
  {
  id: "9",
  icon: "",
  text: "Comedy",
  },
  {
  id: "10",
  icon: "",
  text: "Documentaries",
  },
  {
  id: "11",
  icon: "",
  text: "Dramas",
  },
  {
  id: "12",
  icon: "",
  text: "Independent Movies",
  },
  {
  id: "13",
  icon: "",
  text: "Indian Movies",
  },
  ];

export default function Menu() {
  return (
    <View style={styles.menu}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarImage}>
          <Image
            style={styles.avatar}
            source={require("../../assets/imgs/avatar.png")}
          />
          <Text style={styles.text}>Seba Sepe</Text>
        </View>
        <Icon name="exchange" color="white" size={25} />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.textWithIcon}>
          <View style={styles.withIcon}>
            <Icon
              style={styles.iconWithText}
              name="download"
              color="white"
              size={28}
            />
            <Text style={styles.text}>My Downloads</Text>
          </View>
          <Icon
            style={styles.rightIcon}
            name="angle-right"
            color="white"
            size={28}
          />
        </View>

        <View style={styles.textWithIcon}>
          <View style={styles.withIcon}>
            <IonIcons
              style={styles.iconWithText}
              name="md-checkmark"
              color="white"
              size={28}
            />
            <Text style={styles.text}>My List</Text>
          </View>
          <Icon
            style={styles.rightIcon}
            name="angle-right"
            color="white"
            size={28}
          />
        </View>
        <View style={[styles.items, styles.itemSelected]}>
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Available for Downloads</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Netflix Originals</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Tv Show</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Action & Adventure</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Children & Family Movies</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Comedy</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Documentaries</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Dramas</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Independent Movies</Text>
        </View>
        <View style={styles.noItemSelected}>
          <Text style={styles.text}>Indian Movies</Text>
        </View>

      
      </ScrollView>
    </View>
  );
}
