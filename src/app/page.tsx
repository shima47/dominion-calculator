'use client'
import ContextProvider from '@/components/ContextProvider';
import ScoreCalculator from '@/components/ScoreCalculator';


const Home = () => {
  return (
    <ContextProvider>
      <ScoreCalculator />
    </ContextProvider>
  );
}

export default Home
