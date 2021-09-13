const express = require("express");
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books.js')
var cors = require('cors');
const path = require("path");
// const { MONGODB } = require('./config');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))


mongoose
  .connect(process.env.MONGODB, {  useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
  })

// Serve up static assets (usually on heroku)

  app.use(express.static("client/build"));




// Define API routes here
app.use("/api/books", bookRoutes)

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});