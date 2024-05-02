'use client'

import { createContext, useState, useContext } from "react"

interface IContextValue {
  user: string,
  setUser : (user:string) => void
  boardName: string,
  setBoardName : (board:string) => void
}

export const Context = createContext<IContextValue>({} as IContextValue);
export const AppWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [user, setUser] = useState<string>("");
    const [boardName, setBoardName] = useState<string>("");

    return (
        <Context.Provider value={{user, setUser, boardName, setBoardName}}>
            {children}
        </Context.Provider>
    )

}

export const useAppContext = () => {
  return useContext(Context);
}