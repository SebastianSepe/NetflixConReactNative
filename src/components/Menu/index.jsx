import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  renderItem,
} from "react-native";
import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "./styles";


const genres = [
  { name: "TV Movie", id: 878 },
  { name: "Action", id: 28 },
  { name: "Adventure", id: 12 },
  { name: "Animation", id: 16 },
  { name: "Comedy", id: 35 },
  { name: "Crime", id: 80 },
  { name: "Documentary", id: 99 },
  { name: "Drama", id: 18 },
  { name: "Family", id: 10751 },
  { name: "War", id: 10752 },
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
        {genres.map((genre) => (
            <React.Fragment key={genre.id}>
              <View style={styles.items}>
              <Text style={styles.text}>{genre.name}</Text>
              </View>
            </React.Fragment>
          ))}
      </ScrollView>
    </View>
  );
}