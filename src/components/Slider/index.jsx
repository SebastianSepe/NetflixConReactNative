import { Dimensions, Image, View } from "react-native";
import { useState } from "react";

import Swiper from "react-native-swiper";
import styles from "./styles";

const Slide = ({ uri, width, height }) => (
  <View style={styles.container}>
    <Image style={{ width, height }} source={{ uri }} />
  </View>
);

export default function Slider() {
  const { width } = Dimensions.get('window');
  const [imagesSlider, setImagesSlider] = useState([
    require("../../assets/imgs/eljuegodelcalamar.jpg"),
    require("../../assets/imgs/minions.jpg"),
    require("../../assets/imgs/tarzan.jpg"),
  ]);

  const handleImageChange = (newImages) => {
    setImagesSlider(newImages);
  };

  return (
    <View style={styles.swiperContainer}>
      <Swiper autoplay height={180}>
        {imagesSlider.map((item, i) => (
          <Slide uri={item} key={i} width={width} height={180} />
        ))}
      </Swiper>
    </View>
  );
}
