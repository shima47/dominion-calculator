'use client'
import { useContext, useState } from 'react';
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
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-9/10 mx-auto">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-center font-mono text-sm">
        <h2 className="text-lg font-bold">ドミニオン得点計算</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="px-2.5">種類</span>
            <span className="px-2.5">枚数</span>
            <span className="px-2.5">得点</span>
          </div>
          {CARD_INFO.map(item => (
            <VictoryPointCard
              key={item.cardName}
              cardName={item.cardName}
              pointsPerCard={item.scorePerCard}
            />
          ))}
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">合計得点:</h3>
          <p className="text-lg">{totalScore}</p>
        </div>
      </div>
    </main>
  );
}
