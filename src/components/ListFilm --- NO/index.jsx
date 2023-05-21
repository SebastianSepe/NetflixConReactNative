// import { DefaultTheme } from '@react-navigation/native';
// import { useState } from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, Modal } from "react-native";
// import styles from './styles';

// const MovieList = ({ title, data }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");

//   const handleImagePress = (image) => {
//     setSelectedImage(image);
//     setShowModal(true);
//   };

//   return (
//     <View>
//       <Text style={styles.text}>{title}</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {data.map((item, index) => (
//           <TouchableOpacity key={index} onPress={() => handleImagePress(item.image)}>
//             <Image style={styles.listImageContenier} source={{ uri: item.image }} />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
//         <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Image style={styles.modalImage} source={{ uri: selectedImage }} />
//               <TouchableOpacity style={styles.closeButton} onPress={() => setShowModal(false)}>
//                 <Text style={styles.closeButtonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </View>
//   );
// };

// export default MovieList;