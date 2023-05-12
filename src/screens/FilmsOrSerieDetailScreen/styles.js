import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
    movieDetailsContainer: {
      borderColor: "#ccc",
      padding: 10,
      color: colors.textPrimary,
      backgroundColor: colors.backgroundPrimary,
      height: "100%",
      width: "100%",
    },
    movieTitle: {
      fontWeight: "bold",
      fontSize: 16,
      color: colors.textPrimary
    },
    movieReleaseDate: {
      fontSize: 14,
      marginBottom: 5,
      color: colors.textPrimary
    },
    movieOverview: {
      fontSize: 14,
      marginBottom: 5,
      color: colors.textPrimary
    },
    moviePopularity: {
      fontSize: 14,
      marginBottom: 5,
      color: colors.textPrimary
    },
    moviePoster: {
        width: "80%",
        height: undefined, // Set height to undefined to use aspectRatio property
        aspectRatio: 2/3, // Replace 2/3 with the actual aspect ratio of your image
        marginRight: 10,
        alignSelf: "center",
        margin: 15,
      },
      backButton: {
        marginLeft: 10,
      },
  });
  
  export default styles;