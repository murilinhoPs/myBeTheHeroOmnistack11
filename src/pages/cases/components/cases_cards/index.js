import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { cardContext } from "../../../../global/card_context";
import CardView from "./view";

export default function CasesCards(props) {
  const navigation = useNavigation();
  const { setCaso } = useContext(cardContext);

  function goToDetails(caso) {
    setCaso(caso);
    navigation.navigate("Detail");
  }

  return (
    <CardView
      caso={props.caso}
      title={props.caso.title}
      name={props.caso.name}
      value={props.caso.value}
      goTo={goToDetails}
    />
  );
}
