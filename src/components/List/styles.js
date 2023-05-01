import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listImageContenier: {
    width: 120,
    height: 174,
    borderRadius: 15,
    shadowColor: "#ff0000",
    shadowRadius: 30,
  },

  listImageContenier2: {
    width: 120,
    height: 174,
    borderRadius: 15,
    shadowColor: "#ff0000",
    shadowRadius: 30,
  },
  listContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#000",
  },

  text: {
    flex: 1,
    color: "white",
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  addElementMyList: {
    flexDirection: "row",
    alignItems: "center",
  },
// MODAL

  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  containerModal: {
    width: "80%",
    height: "50%",
    backgroundColor: "#191919",
    borderRadius: 25,
    padding: 18,
    margin: 10,
  },
  textModal: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold"
  },

  headerModal: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  textInputAndButtonModal: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 2,
    borderRadius: 15
  },

  textInputModal: {
    alignItems: "center",
    alignContent: "center",
    borderBottomWidth: 2,
    borderColor: "white",
  },

  viewListModal: {
    justifyContent: "space-around",
    flexDirection: "row",

  },

  renderItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 2,
    padding: 2,
    marginBottom: 3,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "white"
  },

  textAddItem: {

  },

  buttonModal: {
    flex: 1,
  },
});

export default styles;
