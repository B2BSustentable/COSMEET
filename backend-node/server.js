// const io = require('socket.io')(8000, {
//     cors: {
//         origin: ['http://localhost:3000']
//     }
// })

// const users = {}

// io.on('connection', socket => {
//     socket.on('new-user', name => {
//         users[socket.id] = name
//         socket.broadcast.emit('user-connected', name)
//     })
//     socket.on('send-chat-message', message => {
//         socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
//     })
//     socket.on('disconnect', () => {
//         socket.broadcast.emit('user-disconnected', users[socket.id])
//         delete users[socket.id]
//     })
// })

const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

//Signup and login
app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});