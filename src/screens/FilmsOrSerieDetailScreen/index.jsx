import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";

export default function FilmsOrSerieDetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.movieDetailsContainer}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.moviePoster}
      />
      <Text style={styles.movieTitle}>Title: {movie.title}</Text>
      <Text style={styles.movieReleaseDate}>
        Release Date:{movie.release_date}
      </Text>
      <Text style={styles.movieOverview}>Overview: {movie.overview}</Text>
      <Text style={styles.moviePopularity}>Popularity: {movie.popularity}</Text>
    </View>
  );
}

