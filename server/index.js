import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin:
      process.env.NODE_ENV === "production" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"],
  },
});

io.on("connection", (socket) => {
  console.log(`A user connected: ${socket.id}`);

  socket.on("message", (data) => {
    console.log(data);
    io.emit('message', `${socket.id}: ${data}`); //emit this message to everyone connected to the server 
  });
});

httpServer.listen(3000, () => {
  console.log("Server is listening on port 3000");
});