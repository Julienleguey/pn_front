import PlayersCards from "./playersCards";
import Button from "../Shared/Button";

const Table = ({ players, revealed, revealNotes, newVote }) => {
  function calcScore() {
    const notes = players.map((player) => player.note);
    const sum = notes.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    const score = (sum / players.length).toFixed(1);
    return score;
  }

  return (
    <div>
      <PlayersCards players={players} revealed={revealed} />
      <div className="mt-5 d-flex f-col ai-center">
        {players.every((player) => player.note !== null) && !revealed && (
          <div>
            <Button onClick={revealNotes}>Reveal</Button>
          </div>
        )}
        {players.every((player) => player.note !== null) && revealed && (
          <h4 className="my-5">Average: {calcScore()}</h4>
        )}
        {revealed && (
          <div>
            <Button onClick={newVote}>New Vote</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
