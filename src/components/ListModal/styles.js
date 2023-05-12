import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
  listImageContenier: {
    width: 120,
    height: 174,
    borderRadius: 15,
  },

  listContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.backgroundPrimary,
  },

  text: {
    flex: 1,
    color: colors.textPrimary,
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;