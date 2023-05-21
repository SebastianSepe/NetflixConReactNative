import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    image: {
      width: 120,
      height: 174,
      borderRadius: 15,
      margin: 5,
    },
    genreName: {
      fontSize: 18,
      color: colors.textPrimary,
    },
  });
  
  export default styles;