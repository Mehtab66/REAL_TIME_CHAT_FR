import { useState } from "react";
import io from "socket.io-client";
function App() {
  const [count, setCount] = useState(0);
  const socket = io("http://localhost:3000");
  return (
    <>
      <div>
        <h1>Hello Vite + React!</h1>
      </div>
    </>
  );
}

export default App;
