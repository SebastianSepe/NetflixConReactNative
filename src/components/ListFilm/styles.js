import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
  listImageContenier: {
    width: 120,
    height: 174,
    borderRadius: 15,
  },

  text: {
    flex: 1,
    color: colors.textPrimary,
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },

});

export default styles;
