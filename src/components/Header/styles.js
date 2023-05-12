import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: "100%",
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
