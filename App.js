import React from "react";

import Routes from "./src/routes";
import { ApiProvider } from "./src/global/api_context";
import { CardProvider } from "./src/global/card_context";

export default function App() {
  return (
    <ApiProvider>
      <CardProvider>
        <Routes />
      </CardProvider>
    </ApiProvider>
  );
}
