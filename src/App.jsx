import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Button, Container, TextField, Typography } from "@mui/material";

function App() {
  const socket = io("http://localhost:3000");
  const [message, setmessage] = useState("");
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    socket.on("welcome", (s) => {
      console.log("hello wrold");
      console.log(s);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (socket.connected) {
      console.log("Sending message:", message);
      socket.emit("message", message);
      setmessage("");
    } else {
      console.log("Socket not connected");
    }
  };
  return (
    <Container>
      <Typography variant="h3">Hello World</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined" // Fixed typo
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </Container>
  );
}

export default App;
