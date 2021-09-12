import classnames from "classnames";

const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34];

const NoteCards = ({ selectedCard, setNewNote, revealed }) => {
  function onCardSelected(nbr) {
    if (revealed) return;

    setNewNote(nbr);
  }

  function displayCards() {
    return fibonacci.map((nbr, index) => (
      <div
        key={index}
        className={classnames(
          "note-card",
          selectedCard === nbr && "selected",
          revealed && "disabled"
        )}
        onClick={() => onCardSelected(nbr)}
      >
        <span>{nbr}</span>
      </div>
    ));
  }

  return <div className="d-flex f-row">{displayCards()}</div>;
};

export default NoteCards;
