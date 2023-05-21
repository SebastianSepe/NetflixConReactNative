import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./styles";
import MovieList from "../../MovieList";

export default function List() {
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

  const [showContent, setShowContent] = useState(false);

  const handlePress = () => {
    setShowContent(!showContent);
  }

  return (
    <View style={styles.listContainer}>
      {showContent && (
        <Text style={styles.content}>Aquí va el contenido que deseas mostrar</Text>
      )}
      <ScrollView>
        <View>
        <TouchableOpacity onPress={handlePress}></TouchableOpacity>
          {genres.map((genre) => (
            <React.Fragment key={genre.id}>
              <Text style={styles.text}>{genre.name}</Text>
              <MovieList genreId={genre.id} />
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
