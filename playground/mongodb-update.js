// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b9c91ed755f4f84c0c97eff')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b98c3d234b22b071a4e9511')
  }, {
    $set: {
      name: 'Daryl'
    },
    $inc: {
      age : 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // client.close();
});
