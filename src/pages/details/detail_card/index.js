import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default function DetailCard() {
  return (
    <View style={styles.case}>
      <View style={styles.caseHeader}>
        <View>
          <Text style={styles.caseProperty}>CASO:</Text>
          <Text style={styles.casePropertValue}>Ajuda react-native hooks</Text>
        </View>

        <View>
          <Text style={styles.caseProperty}>NOME:</Text>
          <Text style={styles.casePropertValue}>João</Text>
        </View>
      </View>

      <Text style={styles.caseProperty}>DESCRIÇÃO</Text>
      <Text style={styles.casePropertValue}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Text>

      <Text style={styles.caseProperty}>ASSUNTOS</Text>
      <Text style={styles.casePropertValue}>
        tecnologia, mobile, react-native
      </Text>
    </View>
  );
}
