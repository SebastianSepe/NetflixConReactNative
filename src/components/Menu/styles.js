import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    menu:{
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#191919",
    },
    avatarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width / 2 + 59,
        borderBottomColor: "#000",
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    avatarImage: {
        flexDirection: "row",
        alignItems: "center",
        
    },
    textIcons:{
        color: "#b3b3b3",
        fontSize: 15,
        marginLeft: 10,
    },
    text: {
        color: "#b3b3b3",
        fontSize: 15,
    },
    textWithIcon:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3,
    },
    withIcon:{
        flexDirection: "row",
        alignItems: "stretch",
        paddingHorizontal: 15, 
        marginRight: 10,
    },
    scrollContainer: {
        width: width / 2 + 59
    },
    rightIcon: {
        paddingRight: 20,
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20,
    }, 
    items:{
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5,
    },
    itemSelected: {
       borderLeftWidth: 5,
       borderColor: "red"
    },
    noItemSelected: {
        paddingVertical: 20,
        paddingLeft: 25,
        marginTop: 5,
    }
});

export default styles;