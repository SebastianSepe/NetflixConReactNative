import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 16,
      paddingTop: 24,
    },
    searchContainer: {
      marginBottom: 24,
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    input: {
      flex: 1,
      height: 40,
      fontSize: 16,
    },
    searchButton: {
      backgroundColor: "#007bff",
      borderRadius: 8,
      marginLeft: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    searchButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    resultsContainer: {
      paddingBottom: 16,
    },
    movieContainer: {
      marginVertical: 8,
      padding: 8,
      backgroundColor: "#f0f0f0",
      borderRadius: 8,
    },
    movieTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 4,
    },
    movieReleaseDate: {
      fontSize: 16,
      marginBottom: 4,
    },
    movieOverview: {
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 16,
      paddingTop: 24,
    },
    modalPoster: {
      width: "100%",
      height: 400,
      resizeMode: "cover",
      marginBottom: 16,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
  
  });
  

export default styles;
