import GameUI from "./GameUI";
import Status from "./Status";
import "./BattleSimulator.css";
import { useState } from "react";

function randNum(max) {
  return Math.floor(Math.random() * max) + 1;
}

const BattleSimulator = ({ maxDamage }) => {
  const [gameState, setGameState] = useState({
    player: 100,
    enemy: 100,
    isPlaying: true,
    status: "Engage the Enemy!",
  });

  function updateHealth() {
    setGameState((s) => {
      let newPlayer = s.player - randNum(maxDamage);
      let newEnemy = s.enemy - randNum(maxDamage);
      newPlayer = newPlayer < 0 ? 0 : newPlayer;
      newEnemy = newEnemy < 0 ? 0 : newEnemy;
      if (newPlayer === 0 && newEnemy === 0) {
        return {
          ...s,
          status: "The battle ended in destruction for both ships!",
          isPlaying: false,
          player: newPlayer,
          enemy: newEnemy,
        };
      } else if (newPlayer === 0) {
        return {
          ...s,
          status: "Mission failed. Your spacecraft was defeated!",
          isPlaying: false,
          player: newPlayer,
          enemy: newEnemy,
        };
      } else if (newEnemy === 0) {
        return {
          ...s,
          status: "Victory is yours! You fended off the enemy!",
          isPlaying: false,
          player: newPlayer,
          enemy: newEnemy,
        };
      } else {
        return { ...s, player: newPlayer, enemy: newEnemy };
      }
    });
  }

  function resetState() {
    setGameState({
      player: 100,
      enemy: 100,
      isPlaying: true,
      status: "Engage the Enemy!",
    });
  }

  return (
    <div className="BattleSimulator">
      <h1>Space Battle Simulator</h1>
      <GameUI
        player={gameState.player}
        enemy={gameState.enemy}
        isPlaying={gameState.isPlaying}
        updateHealth={updateHealth}
        resetState={resetState}
      />
      <Status status={gameState.status} />
    </div>
  );
};

export default BattleSimulator;
