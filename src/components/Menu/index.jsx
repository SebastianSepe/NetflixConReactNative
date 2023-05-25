import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
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

const size = 24
const color = "white"

const Avatar = () => (
  <View style={styles.avatarContainer}>
    <View style={styles.avatarImage}>
      <Image
        style={styles.avatar}
        source={require("../../assets/imgs/avatar.png")}
      />
      <Text style={styles.text}>Seba Sepe</Text>
    </View>
    <FontAwesome name="exchange" size={size} color={color} />
  </View>
);

const MenuItem = ({ iconName, text }) => (
  <View style={styles.textWithIcon}>
    <View style={styles.withIcon}>
      {iconName === "download" ? (
        <MaterialCommunityIcons name="download" size={size} color={color} />
      ) : (
        <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />
      )}
      <Text style={styles.textIcons}>{text}</Text>
    </View>
    <FontAwesome style={styles.rightIcon} name="angle-right" color={color} size={size} />
  </View>
);

const GenreItem = ({ item }) => (
  <View style={styles.items}>
    <Text style={styles.text}>{item.name}</Text>
  </View>
);

const Menu = ({ navigation }) => { // Modificar la función para recibir `props`
  const renderGenreItem = ({ item }) => <GenreItem item={item} />;

  return (
    <View style={styles.menu}>
      <Avatar />
      <FlatList
        style={styles.scrollContainer}
        data={genres}
        renderItem={renderGenreItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            <MenuItem iconName="download" text="My Downloads" />
            <MenuItem iconName="Ionicons" text="My List" />
          </>
        }
      />
    </View>
  );
};

export default Menu;