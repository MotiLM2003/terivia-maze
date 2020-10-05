import { useEffct, useState } from 'react';

export const useStage = () => {
  const STAGE_WIDTH = 39;
  const STAGE_HEIGHT = 39;
  const initStage = () => {
    const arr = new Array(STAGE_HEIGHT);
    for (let i = 0; i < arr.length; i++) {
      let arr2 = new Array(STAGE_WIDTH);
      for (let x = 0; x < arr2.length; x++) {
        let cls = 'grass';
        if (initIsWall(i, x)) {
          cls = 'wall';
        }
        arr2[x] = [0, cls];
      }
      arr[i] = arr2;
    }

    //console.log(arr);
    return arr;
  };

  const initIsWall = (i, x) => {
    return (
      (i === 0 && x < STAGE_HEIGHT) ||
      x === 0 ||
      x + 1 === STAGE_WIDTH ||
      i + 1 === STAGE_HEIGHT
    );
  };

  return [initStage()];
};
