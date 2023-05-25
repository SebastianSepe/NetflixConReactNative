import React from "react";
import { View, Image, Text, FlatList } from "react-native";
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

const Avatar = () => (
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
);

const MenuItem = ({ iconName, text }) => (
  <View style={styles.textWithIcon}>
    <View style={styles.withIcon}>
      {iconName === "FontAwesome" ? (
        <Icon style={styles.iconWithText} name={iconName} color="white" size={28} />
      ) : (
        <IonIcons style={styles.iconWithText} name={iconName} color="white" size={28} />
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
    <Icon style={styles.rightIcon} name="angle-right" color="white" size={28} />
  </View>
);

const GenreItem = ({ item }) => (
  <View style={styles.items}>
    <Text style={styles.text}>{item.name}</Text>
  </View>
);

const Menu = (navigation) => {
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
            <MenuItem iconName="FontAwesome" text="My Downloads" />
            <MenuItem iconName="Ionicons" text="My List" />
          </>
        }
      />
    </View>
  );
};

export default Menu;
