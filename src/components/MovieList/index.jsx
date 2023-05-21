import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const MovieList = ({ genreId, genreName }) => {
  const API_KEY = "b3fc34fe78bbcab82af9557961220767";
  //const API_KEY  =  process.env.REACT_APP_API_KEY_MOVIES
  const TMDB_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


  
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${TMDB_URL}&with_genres=${genreId}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, [genreId]);

  const renderMovie = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { movie: item })}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.genreName}>{genreName}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovie}
        horizontal={true}
      />
    </View>
  );
};

export default MovieList;
