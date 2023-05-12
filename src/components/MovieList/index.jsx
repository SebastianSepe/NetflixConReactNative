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
import { useNavigation } from '@react-navigation/native';

const API_KEY = "b3fc34fe78bbcab82af9557961220767";

const TMDB_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieList = ({ genreId }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${TMDB_URL}&with_genres=${genreId}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, [genreId]);

  const renderMovie = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { movie: item })}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
        style={styles.image}
      />
    </TouchableOpacity>
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const renderSelectedMovie = () => {
    if (!selectedMovie) return null;
    return (
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modal}>
          <View style={styles.containerModal}>
            <View style={styles.card}>
              <Text style={styles.title}>{selectedMovie.title}</Text>
              <Text style={styles.description}>{selectedMovie.overview}</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovie}
        horizontal={true}
      />
      {renderSelectedMovie()}
    </View>
  );
};

MovieList.propTypes = {
  genreId: PropTypes.number.isRequired,
};

export default MovieList;
