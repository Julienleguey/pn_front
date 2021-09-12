import { useState, useEffect } from "react";
import Form from "../components/Shared/Form";
import Input from "../components/Shared/Input";
import Button from "../components/Shared/Button";
import axios from "../utils/axios";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const [serverReady, setServerReady] = useState(false);
  const [roomToJoin, setRoomToJoin] = useState("");

  useEffect(() => {
    wakeUpServer();
  }, []);

  async function wakeUpServer() {
    try {
      await axios.get("ping");
      setServerReady(true);
    } catch (err) {
      console.log("couldn't wake up the server: ", err.response);
    }
  }

  function createRoomPath() {
    return "xxxx-xxxx-xxxx".replace(/[x]/g, (c) => {
      const r = (Math.random() * 36) | 0;
      return r.toString(36);
    });
  }

  function createAndGoToRoom() {
    const path = createRoomPath();
    router.push(`/room/${path}`);
  }

  function joinExistingRoom() {
    if (!roomToJoin) return;

    if (roomToJoin.startsWith("http")) {
      router.push(roomToJoin);
    } else {
      router.push(`/room/${roomToJoin}`);
    }
  }

  if (!serverReady) {
    return (
      <div className="flex-1 d-flex jc-center ai-center">
        <h1>The server is on a free dyno and is waking up. Please wait!</h1>
      </div>
    );
  }

  return (
    <div className="flex-1 d-flex f-col">
      <h1 className="text-center mt-6">Welcome</h1>
      <div className="flex-1 d-flex jc-center ai-center">
        <div className="container-tiny d-flex f-col ai-center">
          <Button onClick={createAndGoToRoom} fullWidth>
            Create a Game
          </Button>
          <h3 className="my-6">or</h3>
          <Form onSubmit={joinExistingRoom} className="w-100">
            <Input
              name="room-name"
              type="text"
              placeholder="Room name"
              value={roomToJoin}
              onChange={(e) => setRoomToJoin(e.target.value)}
            />
            <Button type="submit" fullWidth>
              Join a room
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
