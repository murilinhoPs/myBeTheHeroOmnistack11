import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CasesCards from "../cases_cards/";

export default function CasesLists() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.casesLists}
      data={[1, 2, 3, 4]}
      keyExtractor={(dataid) => String(dataid)}
      renderItem={() => {
        return <CasesCards />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  casesLists: {
    marginTop: 22,
    paddingTop: 5,
  },
});
