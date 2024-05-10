'use client'
import { useContext } from 'react';
import { TotalScoreContext } from '../app/page';
import { VictoryPointCard } from './VictoryPointCard';
import { GardenCard } from './GardenCard';

const CARD_INFO = [
  { cardName: "屋敷", pointsPerCard: 1 },
  { cardName: "広陵", pointsPerCard: 3 },
  { cardName: "属州", pointsPerCard: 6 },
  { cardName: "植民地", pointsPerCard: 10 },
  { cardName: "呪い", pointsPerCard: -1 },
]

export default function ScoreCalculator() {
  const TotalScoreState = useContext(TotalScoreContext)
  if (!TotalScoreState) return

  const { totalScore } = TotalScoreState

  return (
    <main className="flex min-h-screen flex-col p-8 w-9/10 text-lg">
      <div className="w-full max-w-5xl flex flex-col gap-2 justify-center font-mono">
        <div className="font-bold">ドミニオン得点計算</div>
        <div className="flex flex-col space-y-2 w-full">
          {CARD_INFO.map(item => (
            <VictoryPointCard
              key={item.cardName}
              cardName={item.cardName}
              pointsPerCard={item.pointsPerCard}
            />
          ))}
          <div></div>
          <GardenCard key={"garden"} cardName='庭園' pointsPerCard={0} />
        </div>

        <div className="mt-4 w-full flex justify-center">
          <div className="font-bold">合計： {totalScore} 点</div>
        </div>
      </div>
    </main>
  );
}