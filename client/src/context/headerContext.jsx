import { createContext, useState } from "react";

const headerContext = createContext({});

export const headerContextProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  return (
    <headerContext.Provider value={{ headerTitle, setHeaderTitle }}>
      {children}
    </headerContext.Provider>
  );
};

export default headerContext;
