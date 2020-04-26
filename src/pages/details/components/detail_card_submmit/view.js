import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import SubmmitBottomSheet from "../submmit_bottom_sheet";

//TODO: Separate logic from view https://dev.to/tomekbuszewski/high-level-view-and-logic-separation-in-react-39n0

export default function DetailCardView(props) {
  const DetailsActions = () => (
    <View style={styles.cardButtons}>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => props.open(true)}
      >
        <Text style={styles.cardButtonText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => props.open(false)}
      >
        <Text style={styles.cardButtonText}>E-mail</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardProperty}>Salve o dia!</Text>
          <Text style={styles.cardProperty}>Seja meu herói hoje.</Text>
          <Text style={styles.cardPropertValue}>Entre em contato:</Text>
        </View>
        <DetailsActions />
      </View>
      <View></View>
      <SubmmitBottomSheet
        myRef={props.actionSheet}
        caso={props.caso}
        isWpp={props.isWpp}
      />
    </View>
  );
}
