import React from 'react';

// hooks
import { useStage } from '../../hooks/useStage';
import Cell from './Cell';
import './stage.css';
const Stage = () => {
  const [stage] = useStage();

  return (
    <div id='stage'>
      {stage.map((row) => {
        return row.map((cell) => {
          return <Cell className={cell[1]} />;
        });
      })}
    </div>
  );
};

export default Stage;
