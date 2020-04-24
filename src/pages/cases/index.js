import React from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import styles from "./styles";
import CasesList from "./components/cases_lists";
import Header from "../../components/header";
import { apiContext } from "../../global/api_context";
import { Easing } from "react-native-reanimated";

export default function Cases() {
  const { firstLoading } = React.useContext(apiContext);

  return (
    <View style={styles.container}>
      <Header textOrIcon={true} />
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.titleDescription}>
        Esolha um dos posts abaixo e salve o dia de algúem!
      </Text>
      {firstLoading ? (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <AnimatedCircularProgress
            size={40}
            width={3}
            fill={100}
            tintColor="#E04061"
            backgroundColor="#3d5875"
            duration={1000}
          />
        </View>
      ) : (
        <CasesList />
      )}
    </View>
  );
}
