import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
movieDetailsContainer: {
flex: 1,
backgroundColor: "#000",
paddingVertical: 20,
},
moviePoster: {
flex: 1,
resizeMode: "cover",
justifyContent: "flex-end",
paddingBottom: 20,
},
playButton: {
alignSelf: "center",
borderColor: "#fff",
borderWidth: 2,
borderRadius: 30,
padding: 10,
},
generalDetails: {
paddingHorizontal: 20,
},
movieTitle: {
color: "#fff",
fontSize: 24,
fontWeight: "bold",
marginBottom: 10,
},
moviePopularity: {
color: "#fff",
fontSize: 16,
marginBottom: 5,
},
movieReleaseDate: {
color: "#fff",
fontSize: 16,
marginBottom: 5,
},
movieOverview: {
color: "#fff",
fontSize: 16,
lineHeight: 24,
marginBottom: 10,
},
})
  
  export default styles;