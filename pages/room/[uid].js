import { useState, useEffect } from "react";
import SubscribeUser from "../../components/room/subscribeUser";
import Game from "../../components/room/game";

const Room = ({ roomUid }) => {
  const [name, setName] = useState("");
  const [ready, setReady] = useState(false);
  const [displayCopied, setDisplayCopied] = useState(false);

  useEffect(() => {
    if (displayCopied) {
      setTimeout(() => {
        setDisplayCopied(false);
      }, 3000);
    }
  }, [displayCopied]);

  function submitName() {
    if (!name) return;

    setReady(true);
  }

  function copyRoomUidToClipboard() {
    const el = document.createElement("textarea");
    el.value = roomUid;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setDisplayCopied(true);
  }

  return (
    <div className="flex-1 d-flex f-col">
      <div id="room-uid" className="d-flex ai-center">
        <span
          className="m-3 font-weight-bold cursor-pointer"
          style={{ fontSize: "2rem" }}
          onClick={copyRoomUidToClipboard}
        >
          Room name: {roomUid}
        </span>
        {displayCopied && <span className="border border-lg p-2">Copied!</span>}
      </div>
      <div className="flex-1 d-flex jc-center ai-center f-col">
        {ready ? (
          <Game name={name} roomUid={roomUid} />
        ) : (
          <SubscribeUser
            name={name}
            setName={setName}
            submitName={submitName}
          />
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const roomUid = query.uid;

  return {
    props: {
      roomUid: roomUid,
    },
  };
}

export default Room;
