import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#E7EAF2",
    },
    inputContainer: {
      height: 200,
      paddingHorizontal: 30,
      paddingTop: 40,
    },
    titleContainer: {
      marginBottom: 30,
      fontSize: 40,
      fontWeight: "500",
      color: "#1E283C",
      textAlign: "center"
    },
    addItemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 30,
    },
    input: {
      borderBottomColor: "black",
      borderBottomWidth: 2, 
      width: 200,
    },
    listContainer: {
      flex: 2,
      marginHorizontal: 30,
      marginTop: 20,
      padding: 3,
    },
    renderItemStyle: {
      height: 60,
      flexDirection: 'row',
      marginBottom: 25,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 10,
      justifyContent: "space-around",
      alignItems: "center",
      showColor: "black",
      shadowOpacity: 0.3,
      shadowOffset: { width:0, height: 1 },
      shadowRadius: 2,
      elevation: 3,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});


export default styles