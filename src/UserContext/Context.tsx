'use client'

import { createContext, useState, useContext } from "react"

interface IContextValue {
  user: string,
  setUser : (user:string) => void
  board: Board,
  setBoard : (board:Board) => void
}

export const Context = createContext<IContextValue>({} as IContextValue);
export const AppWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [user, setUser] = useState<string>("");
    const [board, setBoard] = useState<Board>({});

    return (
        <Context.Provider value={{user, setUser, board, setBoard}}>
            {children}
        </Context.Provider>
    )

}

export const useAppContext = () => {
  return useContext(Context);
}