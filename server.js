const express = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');
routes = require('./api/routes/todoListRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todolist',{
  useMongoClient: true,
}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log('-- Server listening on: ' + port);