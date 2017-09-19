const express = require('express'),
app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');
routes = require('./api/routes/todoListRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://app:app123@ds040017.mlab.com:40017/todolist',{
  useMongoClient: true,
}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log('-- Server listening on: ' + port);