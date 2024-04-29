import { useContext, useState, useRef } from 'react';
import { TotalScoreContext } from '../app/page';

type VictoryPointCardProps = {
  cardName: string;
  pointsPerCard: number;
};
export const VictoryPointCard = (props: VictoryPointCardProps) => {
  const TotalScoreState = useContext(TotalScoreContext)
  if (!TotalScoreState) return

  const { setTotalScore } = TotalScoreState
  const [cardCount, setCardCount] = useState(0);
  const [cardScore, setCardScore] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.select();
    }
  };

  const handleCardCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const prevCardScore = cardScore
    const newCount = parseInt(event.target.value, 10) || 0;
    const newCardScore = newCount * props.pointsPerCard
    setCardCount(newCount);
    setCardScore(newCardScore);
    setTotalScore(prev => prev - prevCardScore + newCardScore);
  };

  return (
    <div className="flex justify-between">
      <span className="px-2.5">{props.cardName}</span>
      <input
        ref={inputRef}
        className="border rounded p-1 text-lg w-20"
        type="number"
        value={cardCount}
        min="0"
        onChange={handleCardCountChange}
        onFocus={handleFocus}
      />
      <span className="px-2.5">{cardScore}</span>
    </div>
  );
};
