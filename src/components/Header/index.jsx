import {
    Image,
    TouchableWithoutFeedback,
    View,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import React from "react";
import styles from './styles';

const Header = props => (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => props.toggle()} >
            <Icon
                name='bars'
                color='white'
                size={25}
            />
        </TouchableWithoutFeedback>
        <Image style={styles.logo} source={require('../Header/imgs/logo.png')}/>
        <Icon
            name="search"
            color='white'
            size={25}
        />
    </View>
)

export default Header