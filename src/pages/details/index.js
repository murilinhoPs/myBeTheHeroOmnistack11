import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import Header from "../../components/header";
import DetailCard from "./detail_card";
import DetailCardSubmmit from "./detail_card_submmit";

export default function Details() {
  return (
    <View style={styles.container}>
      <Header textOrIcon={false} />
      <View style={styles.content}>
        <DetailCard />
        <DetailCardSubmmit />
      </View>
    </View>
  );
}
