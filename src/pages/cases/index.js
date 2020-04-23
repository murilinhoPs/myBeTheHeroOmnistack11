import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import CasesList from "./components/cases_lists";
import Header from "../../components/header";

export default function Cases() {
  // TODO:
  //UseContext api for show the total cases(state) and for fetch the api(effect)
  return (
    <View style={styles.container}>
      <Header textOrIcon={true} />
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.titleDescription}>
        Esolha um dos posts abaixo e salve o dia de algúem!
      </Text>
      <CasesList />
    </View>
  );
}
