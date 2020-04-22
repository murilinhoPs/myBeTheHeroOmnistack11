import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import logo from "../../assets/logo.png";

export default function Header({ textOrIcon }) {
  const navigation = useNavigation();

  function goToBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.header}>
      <Image source={logo}></Image>
      {textOrIcon ? (
        <Text style={styles.headerText}>
          Filtrar <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      ) : (
        <TouchableOpacity onPress={goToBack}>
          <Feather name="arrow-left" size={27} color="#E04041" />
        </TouchableOpacity>
      )}
    </View>
  );
}

var styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 17,
    opacity: 0.5,
  },
  headerTextBold: {
    fontWeight: "bold",
  },
});
