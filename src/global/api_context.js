import React, { useEffect, createContext, useState } from "react";

import api from "../services/api";

export const apiContext = createContext();

export const ApiProvider = (props) => {
  const [cases, setCases] = useState([]);
  const [totalCases, setTotalCases] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadCases() {
    if (loading) return;

    if (totalCases > 0 && cases.length === totalCases) return;

    setLoading(true);

    const response = await api.get("incidents", { params: { page } });

    setCases([...cases, ...response.data]);
    setTotalCases(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadCases();
  }, []);

  return (
    <apiContext.Provider value={{ cases, totalCases, loadCases }}>
      {props.children}
    </apiContext.Provider>
  );
};
