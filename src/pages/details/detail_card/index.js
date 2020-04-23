import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { cardContext } from "../../../services/card_context";

export default function DetailCard() {
  const { caso } = React.useContext(cardContext);

  return (
    <View style={styles.case}>
      <View style={styles.caseHeader}>
        <View>
          <Text style={styles.caseProperty}>CASO:</Text>
          <Text style={styles.casePropertValue}>{caso.title}</Text>
        </View>

        <View>
          <Text style={styles.caseProperty}>NOME:</Text>
          <Text style={styles.casePropertValue}>{caso.name}</Text>
        </View>
      </View>

      <Text style={styles.caseProperty}>DESCRIÇÃO</Text>
      <Text style={styles.casePropertValue}>{caso.description}</Text>

      <Text style={styles.caseProperty}>ASSUNTOS</Text>
      <Text style={styles.casePropertValue}>R${caso.value},00</Text>
    </View>
  );
}
