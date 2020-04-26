import React from "react";

import { cardContext } from "../../../../global/card_context";
import DetailCardView from "./view";

//TODO: Separate logic from view https://dev.to/tomekbuszewski/high-level-view-and-logic-separation-in-react-39n0

export default function DetailCardSubmmit() {
  const { caso } = React.useContext(cardContext);
  const [isWpp, setIsWpp] = React.useState(false);

  const myActionSheet = React.useRef();

  function openActionSheet({ isWpp }) {
    setIsWpp(isWpp);
    myActionSheet.current.open();
  }

  return (
    <DetailCardView
      open={openActionSheet}
      actionSheet={myActionSheet}
      caso={caso}
      isWpp={isWpp}
    />
  );
}
