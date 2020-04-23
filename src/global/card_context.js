import React, { useState, createContext } from "react";

export const cardContext = createContext();
export const CardProvider = (props) => {
  const [caso, setCaso] = useState({});

  return (
    <cardContext.Provider value={{ caso, setCaso }}>
      {props.children}
    </cardContext.Provider>
  );
};
