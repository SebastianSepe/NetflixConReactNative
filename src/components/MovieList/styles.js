import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
    image: {
      width: 120,
      height: 174,
      borderRadius: 15,
      margin: 5,
    },
    card: {
      position: "absolute",
      top: 50,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "white",
      padding: 20,
      zIndex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      marginBottom: 10,
    },
    modal: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    containerModal: {
      width: "80%",
      height: "50%",
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 25,
      padding: 18,
      margin: 10,
    },
  });
  
  export default styles;