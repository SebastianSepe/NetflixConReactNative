import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header';
import List from '../components/List';
import Slider from '../components/Slider';

export default function MoviesAndSeriesScreen() {
    return (
      <View style={styles.container}>
        <Header />
        <Slider />
        <List />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
  
})