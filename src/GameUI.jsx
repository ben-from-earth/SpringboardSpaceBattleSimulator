import "./GameUI.css";

const GameUI = ({ player, enemy, isPlaying, updateHealth, resetState }) => {
  return (
    <div className="GameUI">
      <p className="Player">
        Player Health: {player}
        {player > 0 ? " ♥️" : " ☠️"}
      </p>
      {isPlaying ? (
        <button className="Trigger" onClick={updateHealth}>
          Fire!
        </button>
      ) : (
        <button className="Reset" onClick={resetState}>
          Reset?
        </button>
      )}
      <p className="Enemy">
        Enemy Health: {enemy}
        {enemy > 0 ? " ♥️" : " ☠️"}
      </p>
    </div>
  );
};

export default GameUI;
