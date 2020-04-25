import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import HeaderView from "./view";
import { apiContext } from "../../global/api_context";

export default function Header({ textOrIcon }) {
  const navigation = useNavigation();
  const { totalCases } = useContext(apiContext);

  function goBack() {
    navigation.goBack();
  }

  const headerDirection = () =>
    textOrIcon
      ? {
          flexDirection: "row",
          justifyContent: "space-between",
        }
      : { flexDirection: "row-reverse", justifyContent: "space-between" };

  return (
    <HeaderView
      headerDirection={headerDirection}
      textOrIcon={textOrIcon}
      goBack={goBack}
      totalCases={totalCases}
    />
  );
}
