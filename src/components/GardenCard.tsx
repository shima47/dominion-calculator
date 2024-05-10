import { useContext, useState, } from 'react';
import { TotalScoreContext } from '@/components/ContextProvider';
import { StepperField } from '@aws-amplify/ui-react';

type GardenCardProps = {
  cardName: string;
  pointsPerCard: number;
};
export const GardenCard = (props: GardenCardProps) => {
  const TotalScoreState = useContext(TotalScoreContext)
  if (!TotalScoreState) return

  const { setTotalScore } = TotalScoreState
  const [gardenCardCount, setGardenCardCount] = useState(0);
  const [allCardCount, setAllCardCount] = useState(0);
  const [cardScore, setCardScore] = useState(0);

  const handleGardenCardCountChange = (newCount: number) => {
    const newCountObj = {
      gardenCard: newCount,
      allCardCount: allCardCount,
    }
    calcGardenScore(newCountObj)
    setGardenCardCount(newCount);
  };

  const handleAllCardCountChange = (newCount: number) => {
    const newCountObj = {
      gardenCard: gardenCardCount,
      allCardCount: newCount,
    }
    calcGardenScore(newCountObj)
    setAllCardCount(newCount);
  };

  type newCountObjType = {
    gardenCard: number,
    allCardCount: number,
  }
  const calcGardenScore = (cardCount: newCountObjType) => {
    const prevCardScore = cardScore
    const newCardScore = Math.floor(cardCount.allCardCount / 10) * cardCount.gardenCard;
    setCardScore(newCardScore);
    setTotalScore(prev => prev - prevCardScore + newCardScore);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2 w-full">{props.cardName}</div>
        <div className="flex items-center justify-center gap-2 w-full">
          <StepperField
            width={"150px"}
            value={gardenCardCount}
            onStepChange={handleGardenCardCountChange}
            label=""
            defaultValue={0}
            min={0}
            labelHidden
          />
          枚
        </div>
        <div className="flex items-center justify-center gap-2 w-full">{cardScore} 点</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2 w-full">全体</div>
        <div className="flex items-center justify-center gap-2 w-full">
          <StepperField
            width={"150px"}
            value={allCardCount}
            onStepChange={handleAllCardCountChange}
            label=""
            defaultValue={0}
            min={0}
            labelHidden
          />
          枚
        </div>
        <div className="flex items-center justify-center gap-2 w-full"></div>
      </div>
    </div>
  );
};
