import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function DetailCardSubmmit() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardProperty}>Salve o dia!</Text>
        <Text style={styles.cardProperty}>Seja meu herói hoje.</Text>
        <Text style={styles.cardPropertValue}>Entre em contato:</Text>
      </View>

      <View style={styles.cardButtons}>
        <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
          <Text style={styles.cardButtonText}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
          <Text style={styles.cardButtonText}>Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
