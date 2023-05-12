import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import axios from "axios";
import FilmsOrSerieDetailScreen from "../../screens/FilmsOrSerieDetailScreen";

export default function DataApi() {
  const apiKey = process.env.REACT_APP_API_KEY_MOVIES;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const MovieDetails = ({ movieId }) => {
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
      const fetchMovieDetails = async () => {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      };

      fetchMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
      return <Text>Loading...</Text>;
    }

    return (
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`,
          }}
          style={styles.moviePoster}
        />
        <Text>Title: {movieDetails.title}</Text>
        <Text>Release Date:{movieDetails.release_date}</Text>
        <Text>Overview: {movieDetails.overview}</Text>
        <Text>Popularity: {movieDetails.popularity}</Text>
      </View>
    );
  };
  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`
      );

      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };
  const handleSearch = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1`
    );
    setSearchResults(response.data.results);
  };
  const handleMoviePress = (movie) => {
    setSelectedMovie(movie);
    navigation.navigate("FilmsOrSerieDetailScreen", { movie });
  };
  const closeModal = () => {
    setSelectedMovie(null);
  };
  const renderMovie = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleMoviePress(item)}
      style={styles.movieContainer}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
        style={styles.moviePoster}
      />
      <View style={styles.movieInfoContainer}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieReleaseDate}>{item.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
  function renderPoster({ item }) {
    return (
      <TouchableOpacity onPress={() => handleSelectMovie(item)}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.posterImage}
        />
      </TouchableOpacity>
    );
  }
  const modalPosterUrl = useMemo(
    () => `https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`,
    [selectedMovie]
  );
  function CloseButton({ onPress }) {
    return <Button title="Close" onPress={onPress} />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Search Movies</Text>
        <TextInput
          style={styles.input}
          placeholder="What do you want to see?"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {searchResults && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovie}
        />
      )}

      {searchResults && (
        <View style={styles.posterContainer}>
          <Text style={styles.text}>Posters</Text>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPoster}
            horizontal={true}
          />
        </View>
      )}

      <Modal visible={selectedMovie} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedMovie && (
            <>
              <Image
                source={{ uri: modalPosterUrl }}
                style={styles.modalPoster}
              />
              <Text style={styles.modalTitle}>{selectedMovie.title}</Text>
              <Text style={styles.modalReleaseDate}>
                Release Date: {selectedMovie.release_date}
              </Text>
              <Text style={styles.modalOverview}>{selectedMovie.overview}</Text>
              <CloseButton onPress={closeModal} />
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}
