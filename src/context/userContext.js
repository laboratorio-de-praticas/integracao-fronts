"use client"; // 👈 necessário para usar useState e useContext

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState("adm"); // valor padrão pode vir da API, login, etc
  const [curso, setCurso] = useState("DSM"); // curso padrão (também afeta nav do ADM)

  return (
    <UserContext.Provider value={{ userType, setUserType, curso, setCurso }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
