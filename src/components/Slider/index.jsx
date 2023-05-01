import {
    Dimensions,
    Image,
    View
} from "react-native";
import React, { Component } from 'react';

import Swiper from 'react-native-swiper';
import styles from "./styles";

const {width} = Dimensions.get('window')
  
  const Slider = props => ( 
    <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
  )
  
  export default class extends Component {
      constructor(props){
          super(props)
          this.state = {
              imagesSlider:  [
                  require('../../assets/imgs/eljuegodelcalamar.jpg'),
                  require('../../assets/imgs/minions.jpg'),
                  require('../../assets/imgs/tarzan.jpg')
              ]
          }       
      }
      render(){
          return (
              <View style={styles.test}>
                <Swiper
                    autoplay
                    height={180}
                  >
                  {
                    this.state.imagesSlider.map((item, i) => <Slider
                        uri={item}
                        key={i}
                      />)
                    }
                </Swiper>
            </View>
        )
    }
}

