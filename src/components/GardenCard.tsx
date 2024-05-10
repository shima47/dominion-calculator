import { useContext, useState, useRef } from 'react';
import { TotalScoreContext } from '../app/page';

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
  const inputGardenCardRef = useRef<HTMLInputElement>(null);
  const inputAllCardRef = useRef<HTMLInputElement>(null);

  const handleGardenCardFocus = () => {
    const inputElement = inputGardenCardRef.current;
    if (inputElement) {
      inputElement.select();
    }
  };

  const handleAllCardFocus = () => {
    const inputElement = inputAllCardRef.current;
    if (inputElement) {
      inputElement.select();
    }
  };

  const handleGardenCardCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(event.target.value, 10) || 0;
    setGardenCardCount(newCount);
    const newCountObj = {
      gardenCard: newCount,
      allCardCount: allCardCount,
    }
    calcGardenScore(newCountObj)
  };

  const handleAllCardCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(event.target.value, 10) || 0;
    setAllCardCount(newCount);
    const newCountObj = {
      gardenCard: gardenCardCount,
      allCardCount: newCount,
    }
    calcGardenScore(newCountObj)
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
          <input
            ref={inputGardenCardRef}
            className="border rounded p-1 w-20"
            type="number"
            value={gardenCardCount}
            min="0"
            onChange={handleGardenCardCountChange}
            onFocus={handleGardenCardFocus}
          />
          枚
        </div>
        <div className="flex items-center justify-center gap-2 w-full">{cardScore} 点</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2 w-full">全体</div>
        <div className="flex items-center justify-center gap-2 w-full">
          <input
            ref={inputAllCardRef}
            className="border rounded p-1 w-20"
            type="number"
            value={allCardCount}
            min="0"
            onChange={handleAllCardCountChange}
            onFocus={handleAllCardFocus}
          />
          枚
        </div>
        <div className="flex items-center justify-center gap-2 w-full"></div>
      </div>
    </div>
  );
};
