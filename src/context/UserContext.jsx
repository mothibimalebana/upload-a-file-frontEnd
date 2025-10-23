import { createContext, useContext } from "react";

const UserContext = createContext(null)

export const useAuth = () => {
    return useContext(UserContext)
}