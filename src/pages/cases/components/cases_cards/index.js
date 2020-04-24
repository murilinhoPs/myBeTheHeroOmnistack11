import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { cardContext } from "../../../../global/card_context";
import styles from "./styles";

export default function CasesCards(props) {
  const navigation = useNavigation();
  const { setCaso } = useContext(cardContext);

  function goToDetails(caso) {
    setCaso(caso);
    navigation.navigate("Detail");
  }

  const CardContent = () => (
    <View>
      <View style={styles.caseHeader}>
        <View style={styles.caseHeaderItem}>
          <Text style={styles.caseProperty}>CASO:</Text>
          <Text style={styles.casePropertValue}>{props.caso.title}</Text>
        </View>

        <View style={styles.caseHeaderItem}>
          <Text style={styles.caseProperty}>NOME:</Text>
          <Text style={styles.casePropertValue}>{props.caso.name}</Text>
        </View>
      </View>

      <Text style={styles.caseProperty}>ASSUNTOS</Text>
      <Text style={styles.casePropertValue}>R${props.caso.value},00</Text>
    </View>
  );

  const CardActions = () => (
    <TouchableOpacity
      style={styles.detailsButton}
      onPress={() => goToDetails(props.caso)}
    >
      <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
      <View
        style={{
          borderColor: "#ef5350",
          borderWidth: 2,
          borderRadius: 5,
          padding:3,
          justifyContent:'center'
        }}
      >
        <Feather name="plus" size={20} color="#ef5350" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.case}>
      <CardContent />
      <Divider style={styles.divider} />
      <CardActions />
    </View>
  );
}
