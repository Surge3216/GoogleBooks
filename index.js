const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path');

// const { MONGODB } = require('./config')
const booksRoute = require('./routes/books')

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))

app.use('/api/books', booksRoute)

app.get('/', (req, res)=>{
    res.send('welcome')
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


  mongoose
  .connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .then((res) => {
    console.log(`Server running`);
  })
  .catch(err => {
    console.error(err)
  })