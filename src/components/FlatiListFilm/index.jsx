import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';

const MovieList = ({ title, data }) => {
  
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <Image
            style={styles.listImageContenier}
            source={{ uri: item.image }}
          />
        )}
        data={data}
      />
    </View>
  );
};

export default MovieList;