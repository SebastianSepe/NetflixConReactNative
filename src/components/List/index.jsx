import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  Modal,
} from "react-native";
import * as React from "react";
import { useState } from "react";
import styles from "./styles";
import MyList from "../MyList";
import { CancelButton, AddButton, AddItem } from "../../customObjects/Buttons";

export default function List() {
  const firstLineMovies = [
    {
      key: 1,
      name: "Vikings",
      image:
        "https://selectra.mx/sites/selectra.mx/files/styles/_default/public/poster-vikingos-300_0.png?itok=iUuag8cL",
    },
    {
      key: 2,
      name: "El Gato Con Botas - El Ultimo Deseo",
      image:
        "https://www.universalpictures.es/tl_files/content/movies/puss_in_boots_2/pib2_header-mobile.jpg",
    },
    {
      key: 3,
      name: "Scream 6",
      image:
        "https://m.media-amazon.com/images/M/MV5BODBjM2M4YTQtNmJlMS00MGU2LWI4ZGYtZTA1MzdmZDAyMjFkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    },
    {
      key: 4,
      name: "Shrek 2",
      image:
        "https://i.pinimg.com/originals/44/d4/bf/44d4bfbd2c42a83f3d1513870df508f7.jpg",
    },
    {
      key: 5,
      name: "MarioBros",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hLBBGkuhN2vLkxnb0LKyrySgIpwCwHjzbQ&usqp=CAU",
    },
    {
      key: 6,
      name: "MarioBros",
      image: "https://i.blogs.es/a1190f/fo3k90xayaezry7/450_1000.webp",
    },
  ];
  const secondLineMovies = [
    {
      key: 1,
      name: "Madagascar",
      image: "https://image.tmdb.org/t/p/w500/zMpJY5CJKUufG9OTw0In4eAFqPX.jpg",
    },
    {
      key: 2,
      name: "ToyStory",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlon73ed6pfNpr2l_Nn7LJgk3YjhrxoNWW0PWSnWnSL-H4RyiDPJ-q_RJalqW6INcWmAE&usqp=CAU",
    },
    {
      key: 3,
      name: "Avatar",
      image:
        "https://shsthetribe.com/wp-content/uploads/2022/11/FD09F6A1-46EB-4BC2-B5A8-5F3175551872-e1669867524247.jpeg",
    },
    {
      key: 4,
      name: "Timon & Pumbaa",
      image:
        "https://pics.filmaffinity.com/around_the_world_with_timon_pumbaa-216975828-large.jpg",
    },
    {
      key: 5,
      name: "El Rey Leon",
      image:
        "https://i.pinimg.com/474x/54/46/64/54466444dca01b1e038dd9c44f6f5d44--disney-espa%C3%B1ol-disney-classics.jpg",
    },
    {
      key: 6,
      name: "Los 4 fantasticos",
      image: "https://parecidas.com/img_es/movie/thumb/a1/8326.jpg",
    },
  ];

  //MODAL
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  const onHandleChangeText = (text) => {
    setTextItem(text);
  };

  const addItem = () => {
    setList((prevState) => [
      ...prevState,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };

  const onHandleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = (item) => {
    console.log(item);
    setList((prevState) =>
      prevState.filter((element) => element.name !== item.name)
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItem}>
      <Text>{item.name}</Text>
      <Button title="x" onPress={() => onHandleDelete(item)} />
    </View>
  );

  ///
  return (
    <View style={styles.listContainer}>
      <ScrollView>
        <View>
          <View style={styles.addElementMyList}>
            <Text style={styles.text}>My List</Text>
            <AddItem onPress={toggleModal} text="+" />

            <Modal
              visible={modalVisible}
              animationType="fade"
              transparent={true}
              onRequestClose={toggleModal}
            >
              <View style={styles.modal}>
                <View style={styles.containerModal}>

                  <View style={styles.headerModal}>
                    <Text style={styles.textModal}>My List</Text>
                    <CancelButton text="X" onPress={toggleModal} />
                  </View>

                  <View style={styles.textInputAndButtonModal}>
                    <TextInput
                      placeholder="Write yours favourites"
                      style={styles.textInputModal}
                      onChangeText={onHandleChangeText}
                      value={textItem}
                      placeholderTextColor={"black"}
                    />
                    <Button title="+" onPress={addItem} />
                  </View>
                  <ScrollView>
                    <View style={styles.viewListModal}>
                      <FlatList
                        data={list}
                        renderItem={renderItem}
                        keyExtractor={(item) => item}
                        horizontal={false}
                      />
                    </View>
                  </ScrollView>
                </View>
              </View>
            </Modal>
          </View>

          {/* View de peliculas Horizontales */}
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={({ item }) => (
              <Image
                style={styles.listImageContenier}
                source={{ uri: item.image }}
              />
            )}
            data={firstLineMovies}
          />
        </View>
        <View>
          <Text style={styles.text}>My Recomended List</Text>
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={({ item }) => (
              <Image
                style={styles.listImageContenier}
                source={{ uri: item.image }}
              />
            )}
            data={secondLineMovies}
          />
        </View>
      </ScrollView>
    </View>
  );
}
