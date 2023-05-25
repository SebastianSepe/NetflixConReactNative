import { StyleSheet } from "react-native";
import colors from "../../../constantes/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: 15,
  },

  logo: {
    width: 120,
    height: 40,
  },

  });
  
export default styles;
