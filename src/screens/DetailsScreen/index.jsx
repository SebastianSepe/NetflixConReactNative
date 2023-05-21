import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VideoPlayerScreen from "../VideoPlayerScreen";
import styles from "./styles";

export default function DetailsScreen({ route, navigation }) {
  const { movie } = route.params;

  const handlePress = () => {
    navigation.navigate("PlayVideo");
  };

  return (
    <View style={styles.movieDetailsContainer}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.moviePoster}
      >
        <TouchableOpacity onPress={handlePress} style={styles.playButton}>
          <Ionicons name="play" size={30} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.generalDetails}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.moviePopularity}>
          {movie.original_language.charAt(0).toUpperCase() +
            movie.original_language.slice(1)}{" "}
          | Popularity: {movie.popularity}
        </Text>

        <Text style={styles.movieReleaseDate}>
          Release Date: {movie.release_date}
        </Text>
        <Text style={styles.movieOverview}>{movie.overview}</Text>
      </View>
    </View>
  );
}
