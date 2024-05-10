'use client'
import ScoreCalculator from '@/components/ScoreCalculator';
import { useState, createContext } from 'react';

type TotalScoreContextType = {
  totalScore: number;
  setTotalScore: React.Dispatch<React.SetStateAction<number>>
} | null;
export const TotalScoreContext = createContext<TotalScoreContextType>(null);

export default function Home() {
  const [totalScore, setTotalScore] = useState(0);

  return (
    <TotalScoreContext.Provider value={{ totalScore, setTotalScore }}>
      <ScoreCalculator />
    </TotalScoreContext.Provider>
  );
}
