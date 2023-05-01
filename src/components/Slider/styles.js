import { StyleSheet, Dimensions } from "react-native"

const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
    },
    image: {
        width
    }, 
    test: {
        flex: 1,
    }  
     
})

export default styles;