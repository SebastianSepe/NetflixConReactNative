import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../../../constantes/colors";

import { Search } from "../../../customObjects/Buttons"


const SearchInCatalogue = () => {
  const apiKey = "b3fc34fe78bbcab82af9557961220767";
  // const apiKey = process.env.REACT_APP_API_KEY_MOVIES;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: apiKey,
            language: "en-US",
            query: query,
            page: 1,
          },
        }
      );

      setSearchResults(response.data.results); // set the searchResults state with the search results
    } catch (error) {
      console.error(error);
    }
  };

  const renderMovie = ({ item }) => {
    return (
      <View style={styles.movieContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.moviePoster}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Text style={styles.movieOverview}>{item.overview}</Text>
          <Text style={styles.movieGenres}>{item.genres}</Text>
          <Text style={styles.movieVote}>{item.vote_average}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="What do you want to see?"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholderTextColor={colors.textTerciary}
          textAlign="center"
        />
        <Search text="Search" onPress={() => searchMovies(searchQuery)} />
        <FlatList
          data={searchResults}
          renderItem={renderMovie}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchInCatalogue;
