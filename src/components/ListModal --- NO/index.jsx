// import {
//     FlatList,
//     Image,
//     ScrollView,
//     Text,
//     View,
//     TextInput,
//     Button,
//     Modal,
//   } from "react-native";
// import styles from "./styles";
// import * as React from "react";
// import { useState } from "react";
// import styles from "./styles";
// import { CancelButton } from "../../customObjects/Buttons";

// const [textItem, setTextItem] = useState("");
// const [list, setList] = useState([]);
// const [modalVisible, setModalVisible] = useState(false);

// function toggleModal() {
//   setModalVisible(!modalVisible);
// }

// const onHandleChangeText = (text) => {
//   setTextItem(text);
// };

// const addItem = () => {
//   setList((prevState) => [
//     ...prevState,
//     { name: textItem, id: Math.random().toString() },
//   ]);
//   setTextItem("");
// };

// const onHandleDelete = (item) => {
//   setList((prevState) =>
//     prevState.filter((element) => element.name !== item.name)
//   );
// };

// const renderItem = ({ item }) => (
//   <View style={styles.renderItem}>
//     <Text>{item.name}</Text>
//     <Button title="x" onPress={() => onHandleDelete(item)} />
//   </View>
// );

// function ListModal({ toggleModal, onHandleChangeText, textItem, addItem, list, renderItem }) {
//     return (
//       <View style={styles.modal}>
//         <View style={styles.containerModal}>
//           <View style={styles.headerModal}>
//             <Text style={styles.textModal}>My List</Text>
//             <CancelButton text="X" onPress={toggleModal} />
//           </View>
  
//           <View style={styles.textInputAndButtonModal}>
//             <TextInput
//               placeholder="Write yours favourites"
//               style={styles.textInputModal}
//               onChangeText={onHandleChangeText}
//               value={textItem}
//               placeholderTextColor={"black"}
//             />
//             <Button title="+" onPress={addItem} />
//           </View>
//           <ScrollView>
//             <View style={styles.viewListModal}>
//               <FlatList
//                 data={list}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id}
//                 horizontal={false}
//               />
//             </View>
//           </ScrollView>
//         </View>
//       </View>
//     );
//   }