import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    buttonLogInSignUp: {
        alignSelf: 'center',
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 5,
        marginVertical: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width:0, height: 1 },
        shadowRadius: 2,
        elevation: 3,
        width: '80%',
        alignItems: "center"
    },

    buttonStart: {
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 15,
        width: '90%',
    },
    buttonAddItem: {
        alignSelf: 'center',
        marginRight: 20,
        padding: 4,
    },
    buttonCancel: {
        alignSelf: 'center',
        borderRadius: 100,
        padding: 4,
        backgroundColor: "#191919"
    },

    buttonText: {
        
    },

    buttonModal: {
        flex: 1,
        verticalAlign: "bottom"
    },
    AddButton: {

    },

    buttonSearch:{
        alignSelf: 'center',
        borderRadius: 25,
        padding: 10,
        margin: 5,
        elevation: 3,
        alignItems: "center",
        opacity: 0.9
    },


})

export default styles;