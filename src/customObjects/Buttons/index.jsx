import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../constantes/colors";

export function SignIn(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonLogInSignUp,
                backgroundColor: '#ff0000'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}


export function SignUp(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonLogInSignUp,
                backgroundColor: '#6495ed'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}


export function Start(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonStart,
                backgroundColor: '#000080'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}


export function CancelButton(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonCancel,
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                    fontWeight: 'bold',
                    fontSize: 20,
                    alignItems: "center",
                    alignContent: "center"
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function AddItem(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonAddItem,

            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.textAddItem,
                    color: '#f1f1f1',
                    fontWeight: 'bold',
                    fontSize: 30,
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}


export function AddButton(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonAddItem,
                backgroundColor: 'white',
                borderRadius: 15,

            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.textAddItem,
                    color: 'black',
                    fontWeight: 'bold',
                    
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function Search(props) {

    const { onPress, text } = props
    
    return (
        <TouchableOpacity
            style = {{
                ...styles.buttonSearch,
                backgroundColor: "red",
                width: '40%',
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                    fontWeight: 'bold',
                    
                }}
            
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

