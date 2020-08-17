import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

import TeacherItem, { Teacher } from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";

import styles from "./styles";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) setFavorites(JSON.parse(response));
    });
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((favorite) => (
          <TeacherItem teacher={favorite} favorited={true} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
