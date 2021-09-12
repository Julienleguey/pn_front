import { useState, useEffect } from "react";
import NoteCards from "./noteCards";
import Table from "./table";

const Game = ({ name, roomUid }) => {
  const [wsConnected, setWsConnected] = useState(null); // peut-être mieux d'utiliser useRef ?
  const [selectedCard, setSelectedCard] = useState(null);
  const [players, setPlayers] = useState([]);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const socket = new WebSocket(process.env.NEXT_PUBLIC_WS_URL, roomUid);
    const timer = setInterval(() => {
      if (socket.readyState === 1) {
        clearInterval(timer);
        setWsConnected(socket);
      }
    }, 10);

    return () => {
      socket.close();
    };
  }, []);

  // pas forcément besoin d'un useEffect. Ca pourrait être une fonction appelée quand la connexion est établie en lui passant "socket"
  useEffect(() => {
    if (wsConnected) {
      sendPlayerUpdated(selectedCard);

      wsConnected.onmessage = function (event) {
        const body = JSON.parse(event.data);

        switch (body.instruction) {
          case "reveal-notes":
            setRevealed(true);
            break;
          case "new-vote":
            setRevealed(false);
            setNewNote(null);
            break;
          case "update-players":
            setPlayers(body.message);
            break;
        }
      };
    }
  }, [wsConnected]);

  function setNewNote(nbr) {
    setSelectedCard(nbr);
    sendPlayerUpdated(nbr);
  }

  function sendPlayerUpdated(note) {
    const body = {
      instruction: "update-players",
      message: { roomUid, name, note },
    };
    sendToServer(body);
  }

  function revealNotes() {
    const body = {
      instruction: "reveal-notes",
      message: null,
    };
    sendToServer(body);
  }

  function newVote() {
    const body = {
      instruction: "new-vote",
      message: null,
    };
    sendToServer(body);
  }

  function sendToServer(body) {
    const bodyStringified = JSON.stringify(body);
    wsConnected.send(bodyStringified);
  }

  return (
    <div className="flex-1 d-flex f-col jc-sb ac-sb my-8">
      <Table
        players={players}
        revealed={revealed}
        revealNotes={revealNotes}
        newVote={newVote}
      />
      <NoteCards
        selectedCard={selectedCard}
        setNewNote={setNewNote}
        revealed={revealed}
      />
    </div>
  );
};

export default Game;
