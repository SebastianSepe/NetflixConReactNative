
import { StyleSheet } from "react-native";

const obj = {
    s: 200,
    m: 600,
    l: 1000,
    fontSizeS: {
        fontSize: 10,
        fontHeight: 20,
    },
    fontSizeM: {
        fontSize: 15,
        fontHeight: 30,
    },
    fontSizeS: {
        fontSize: 20,
        fontHeight: 40,
    }
  }

const styles = StyleSheet.create({
    home: {
      flex: 1,
    },
    homeContainer: {
      flex: 1,
    },
  
    homeImageBackground: {
      flex: 1,
      justifyContent: "center",
      opacity: 0.9,
    },
  
    homeTitleAndPlaceholder: {
      justifyContent: "center",
      alignItems: "center",
    },

    homeTitleAndPlaceholder: {
        marginTop: "30%",
        justifyContent: "center",
        alignItems: "center",
      },
  
    logo: {
      width: "90%",
      height: "40%",
    },
  
    homeLoginInput: {
      borderColor: "white",
      width: "80%",
      borderRadius: 25,
      backgroundColor: "#87cefa",
      paddingVertical: 15,
      margin: 12,
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
      opacity: 0.9,
      textAlign: "center",
      fontStyle: "italic",
    },
  
    homeButtonSignIn: {
      flex: 1,
      width: "100%",
      height: "10%",
      marginBottom: 50,
      opacity: 0.9,
      marginTop: 40,
    },
  
    homeSignup: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
  
    homeSignUpQuestion: {
      color: "white",
      fontSize: 14,
    },
  
 

  });

  export default styles;