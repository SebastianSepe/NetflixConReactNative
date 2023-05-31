import React, { useState, useEffect } from "react";
import { View, FlatList, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { connect } from 'react-redux';
import { setMovies } from '../../store/actions/movieList.action';
import { combineReducers } from 'redux';
import movieListReducer from '../../store/reducers/movieList.reducer';

const MovieList = ({ genreId, genreName, movies, setMovies }) => {
  const API_KEY = "b3fc34fe78bbcab82af9557961220767";
  const TMDB_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${TMDB_URL}&with_genres=${genreId}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, [genreId, setMovies]);

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

const rootReducer = combineReducers({
  movies: movieListReducer,
});

export default connect(
  (state) => ({
    movies: state.movies.movies,
  }),
  { setMovies }
)(MovieList);