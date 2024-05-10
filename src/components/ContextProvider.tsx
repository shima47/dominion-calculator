'use client'
import { useState, createContext } from 'react';

type TotalScoreContextType = {
  totalScore: number;
  setTotalScore: React.Dispatch<React.SetStateAction<number>>
} | null;
export const TotalScoreContext = createContext<TotalScoreContextType>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalScore, setTotalScore] = useState(0);

  return (
    <TotalScoreContext.Provider value={{ totalScore, setTotalScore }}>
      {children}
    </TotalScoreContext.Provider>
  );
}

export default ContextProvider
