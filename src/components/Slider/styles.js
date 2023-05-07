import { StyleSheet, Dimensions } from "react-native";

const { width, height} = Dimensions.get("window");



const styles = StyleSheet.create({
  swiperContainer: {
    flext:1,
    height: 180,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
});


export default styles;


// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//   },
//   image: {
//     width,
//   },
//   swiperContainer: {
//     flex: 1,
//   },
// });