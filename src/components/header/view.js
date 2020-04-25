import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import logo from "../../assets/logo.png";
import styles from "./styles";

export default function HeaderView({
  headerDirection,
  goBack,
  totalCases,
  textOrIcon,
}) {
  return (
    <View style={(styles.header, headerDirection())}>
      <Image source={logo}></Image>
      {textOrIcon ? (
        <Text style={styles.headerText}>
          Filtrar <Text style={styles.headerTextBold}>{totalCases} casos</Text>.
        </Text>
      ) : (
        <TouchableOpacity onPress={goBack}>
          <Feather name="arrow-left" size={27} color="#ef5350" />
        </TouchableOpacity>
      )}
    </View>
  );
}
