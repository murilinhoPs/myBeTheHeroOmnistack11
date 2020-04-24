import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import { apiContext } from "../../../../global/api_context";
import CasesCards from "../cases_cards";

export default function CasesLists() {
  const { cases, loadCases } = useContext(apiContext);

  return (
    
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.casesLists}
      data={cases}
      keyExtractor={(data) => String(data.id)}
      onEndReached={loadCases}
      onEndReachedThreshold={0.5}
      renderItem={({ item: data }) => <CasesCards caso={data} />}
    />
  );
}

const styles = StyleSheet.create({
  casesLists: {
    marginTop: 7.0,
    paddingTop: 5,
  },
});
