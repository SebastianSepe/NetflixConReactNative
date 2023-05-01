import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import styles from './styles'

const Modal = ({isVisible, actionDeleteItem, itemSelected }) => {
  return (
    <NewModal visible={isVisible} animationType='fade' transparent={false} >
        <View style={styles.modalContainer}>
            <View>
                <Text>Estas Seguro que desea borrar este elemento? </Text>
                <Text>{itemSelected.name}</Text>
                <Button 
                  title='Eliminar' 
                  color={"red"} 
                  onPress={() => actionDeleteItem()}
                />
            </View>
        </View>
    </NewModal>
  )
}

export default Modal

