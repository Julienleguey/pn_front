import classnames from "classnames";

const PlayersCards = ({ players, revealed }) => {
  function displayPlayersCards() {
    return players.map((player, index) => (
      <div
        key={index}
        className={classnames(
          "player-card",
          player.note !== null && "with-note"
        )}
      >
        <span
          className="pos-absolute w-100 text-center"
          style={{ top: "1rem", left: 0 }}
        >
          {player.name}
        </span>
        <span>{player.note === null || !revealed ? "?" : player.note}</span>
      </div>
    ));
  }

  return <div className="d-flex f-row">{displayPlayersCards()}</div>;
};

export default PlayersCards;
