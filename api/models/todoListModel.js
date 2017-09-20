let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Task name is required'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);