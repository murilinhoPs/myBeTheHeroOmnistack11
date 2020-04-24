import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import logo from "../../assets/logo.png";
import { apiContext } from "../../global/api_context";

export default function Header({ textOrIcon }) {
  const navigation = useNavigation();
  const { totalCases } = useContext(apiContext);

  function goToBack() {
    navigation.goBack();
  }

  const headerDirection = () =>
    textOrIcon
      ? {
          flexDirection: "row",
          justifyContent: "space-between",
        }
      : { flexDirection: "row-reverse", justifyContent: "space-between" };

  return (
    <View style={(styles.header, headerDirection())}>
      <Image source={logo}></Image>
      {textOrIcon ? (
        <Text style={styles.headerText}>
          Filtrar <Text style={styles.headerTextBold}>{totalCases} casos</Text>.
        </Text>
      ) : (
        <TouchableOpacity onPress={goToBack}>
          <Feather name="arrow-left" size={27} color="#ef5350" />
        </TouchableOpacity>
      )}
    </View>
  );
}

var styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 17,
    opacity: 0.5,
  },
  headerTextBold: {
    fontWeight: "bold",
  },
});
