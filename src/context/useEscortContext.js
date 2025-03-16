import { createContext, useContext } from "react";

export const EscortContext = createContext({
    escorts : [],
    setEscorts : ()=>{}
});

export const EscortContextProvider = EscortContext.Provider;

export default function useEscort () {
    return useContext(EscortContext);
}