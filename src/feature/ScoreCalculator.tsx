'use client'
import { useContext } from 'react';
import { TotalScoreContext } from '../app/page';
import { VictoryPointCard } from './VictoryPointCard';

const CARD_INFO = [
  { cardName: "屋敷", scorePerCard: 1 },
  { cardName: "広陵", scorePerCard: 3 },
  { cardName: "属州", scorePerCard: 6 },
  { cardName: "呪い", scorePerCard: -1 },
]

export default function ScoreCalculator() {
  const TotalScoreState = useContext(TotalScoreContext)
  if (!TotalScoreState) return

  const { totalScore } = TotalScoreState

  return (
    <main className="flex min-h-screen flex-col p-8 w-9/10 mx-auto text-lg">
      <div className="w-full max-w-5xl flex flex-col gap-2 justify-center font-mono">
        <div className="font-bold">ドミニオン得点計算</div>
        <div className="flex flex-col space-y-2 w-full">
          {CARD_INFO.map(item => (
            <VictoryPointCard
              key={item.cardName}
              cardName={item.cardName}
              pointsPerCard={item.scorePerCard}
            />
          ))}
        </div>
        <div className="mt-4">
          <div className="text-lg font-bold">合計得点: {totalScore}</div>
        </div>
      </div>
    </main>
  );
}
