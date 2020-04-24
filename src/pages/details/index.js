import React, {useContext, useEffect} from "react";
import { ScrollView, View } from "react-native";

import styles from "./styles";
import Header from "../../components/header";
import DetailCard from "./components/detail_card/";
import DetailCardSubmmit from "./components/detail_card_submmit";

export default function Details() {
  return (
      <View style={styles.container}>
        <Header textOrIcon={false} />
        <ScrollView style={styles.content}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        >
          <DetailCard />
          <DetailCardSubmmit />
        </ScrollView>
      </View>
  );
}
