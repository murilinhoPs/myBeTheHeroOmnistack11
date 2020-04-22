import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function CasesCards() {
  const navigation = useNavigation();

  function goToDetails() {
    navigation.navigate("Detail");
  }

  return (
    <View style={styles.case}>
      <View style={styles.caseHeader}>
        <View style={styles.caseHeaderItem}>
          <Text style={styles.caseProperty}>CASO:</Text>
          <Text style={styles.casePropertValue}>Ajuda react-native hooks</Text>
        </View>

        <View style={styles.caseHeaderItem}>
          <Text style={styles.caseProperty}>NOME:</Text>
          <Text style={styles.casePropertValue}>João</Text>
        </View>
      </View>

      <Text style={styles.caseProperty}>ASSUNTOS</Text>
      <Text style={styles.casePropertValue}>
        tecnologia, mobile, react-native
      </Text>

      <Divider style={styles.divider} />
      <TouchableOpacity style={styles.detailsButton} onPress={goToDetails}>
        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
        <Feather name="arrow-right" size={20} color="#E04041" />
      </TouchableOpacity>
    </View>
  );
}
