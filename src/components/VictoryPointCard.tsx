import { useContext, useState, } from 'react';
import { TotalScoreContext } from '@/components/ContextProvider';
import { StepperField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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

  const handleCardCountChange = (newCount: number) => {
    const prevCardScore = cardScore
    const newCardScore = newCount * props.pointsPerCard
    setCardCount(newCount)
    setCardScore(newCardScore);
    setTotalScore(prev => prev - prevCardScore + newCardScore);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-center gap-2 w-full">{props.cardName}</div>
      <div className="flex items-center justify-center gap-2 w-full">
        <StepperField
          width={"150px"}
          value={cardCount}
          onStepChange={handleCardCountChange}
          label=""
          defaultValue={0}
          min={0}
          labelHidden
        />
        枚
      </div>
      <div className="flex items-center justify-center gap-2 w-full">{cardScore} 点</div>
    </div>
  );
};
