const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://admin:Tx2ItEwzzctkFMR4@cluster0.lzyht.mongodb.net/real_estate?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("real_estate").collection("location_info").find({});
      collection.toArray()
      .then(result => res.json(result));
      // perform actions on the collection object
      client.close();
    });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);