import React from "react";
import { Dimensions, Image, View, Text } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./styles";

const { width } = Dimensions.get("window");

const Carousel = () => {
  const imagesSlider = [
    {
      uri: require("../../assets/imgs/eljuegodelcalamar.jpg"),
      title: "El Juego del Calamar",
      description: "Una serie de televisión surcoreana de 2021",
    },
    {
      uri: require("../../assets/imgs/minions.jpg"),
      title: "Minions",
      description: "Una película de animación estadounidense de 2015",
    },
    {
      uri: require("../../assets/imgs/tarzan.jpg"),
      title: "Tarzan",
      description: "Una película de aventuras de Disney de 1999",
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        height={180}
        showsPagination
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        containerStyle={styles.swiperContainer}
      >
        {imagesSlider.map((image, i) => (
          <Slider key={i} image={image} />
        ))}
      </Swiper>
    </View>
  );
};

const Slider = ({ image }) => (
  <View style={styles.slide}>
    <Image style={styles.image} source={image.uri} />
    <View style={styles.overlay} />
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{image.title}</Text>
      <Text style={styles.description}>{image.description}</Text>
    </View>
  </View>
);



export default Carousel;
