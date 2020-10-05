import { useEffct, useState } from 'react';

export const useStage = () => {
  const STAGE_WIDTH = 30;
  const STAGE_HEIGHT = 30;
  const [stage, setStage] = useState(initStage);

  initStage = () => {
    return Array.from(Array(STAGE_HEIGHT), () => {
      return new Array(STAGE_WIDTH).fill([0, 'clear']);
    });
  };
};
