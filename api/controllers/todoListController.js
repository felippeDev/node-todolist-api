const mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

/**
 * @api {get} /tasks List all tasks
 * @apiGroup Tasks
 * @apiSuccess {id} tasks.id Task unique _id
 * @apiSuccess {string} tasks.name Task name
 * @apiSuccess {date} tasks.Created_date Automatic Task created date
 * @apiSuccess {enum} tasks.status Task status ['pending', 'ongoing', 'completed'] default: 'pendenig'
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "_id": "ejy0kmr",
 *      "name": "Task sample 1",
 *      "Created_date": "2017-02-10T15:46:51.778Z",
 *      "status": "pending"
 *    },
 *    {
 *      "_id": "Y0mrks3",
 *      "name": "Task sample 2",
 *      "Created_date": "2017-02-20T15:46:51.778Z",
 *      "status": "ongoing"
 *    }]
 * @apiErrorExample {json} Thereś no Tasks
 *    HTTP/1.1 404 Not Found
 * @apiErrorExample {json} Internal Error
 *    HTTP/1.1 500 Internal Server Error
 */
exports.getAllTasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
* @api {get} /tasks/:id Get an specific task
* @apiGroup Tasks
* @apiSuccess {id} tasks.id Task unique _id
* @apiSuccess {string} tasks.name Task name
* @apiSuccess {date} tasks.Created_date Automatic Task created date
* @apiSuccess {enum} tasks.status Task status ['pending', 'ongoing', 'completed'] default: 'pendenig'
* @apiSuccessExample {json} Success
*    HTTP/1.1 200 OK
*    {
*      "_id": "ejy0kmr",
*      "name": "Task sample",
*      "Created_date": "2017-02-10T15:46:51.778Z",
*      "status": "pending"
*    }
* @apiErrorExample {json} Task not found
*    HTTP/1.1 404 Not Found
* @apiErrorExample {json} Internal Error
*    HTTP/1.1 500 Internal Server Error
*/
exports.getTask = (req, res) => {
  Task.findById({ _id: req.params.taskId }, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
 * @api {post} /tasks Create a new Task
 * @apiGroup Tasks
 * @apiParam {string} name Task name
 * @apiParamExample {json} Input
 *    {
 *      "name": "A new sample Task"
 *    }
 * @apiSuccess {id} tasks.id Task unique _id
 * @apiSuccess {string} tasks.name Task name
 * @apiSuccess {date} tasks.Created_date Automatic Task created date
 * @apiSuccess {enum} tasks.status Task status ['pending', 'ongoing', 'completed'] default: 'pendenig'
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "_id": "ejy0kmr",
 *      "name": "Task sample 1",
 *      "Created_date": "2017-02-10T15:46:51.778Z",
 *      "status": "pending"
 *    }
 * @apiErrorExample {json} Internal Error
 *    HTTP/1.1 500 Internal Server Error
 */
exports.createTask = (req, res) => {
  let new_task = new Task(req.body);
  new_task.save((err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
 * @api {put} /tasks/:id Update a task
 * @apiGroup Tasks
 * @apiParam {id} id Task id
 * @apiParam {string} name Task name
 * @apiParam {enum} done Task should be done?
 * @apiParamExample {json} Input
 *    {
 *      "name": "Task sample 1",
 *      "status": true
 *    }
 * @apiSuccessExample {json} Updated
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Internal Error
 *    HTTP/1.1 500 Internal Server Error
 */
exports.updateTask = (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
 * @api {delete} /tasks/:id Delete a task
 * @apiGroup Tasks
 * @apiParam {id} id Task id
 * @apiSuccessExample {json} Deleted
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Internal Error
 *    HTTP/1.1 500 Internal Server Error
 */
exports.deleteTask = (req, res) => {
  Task.remove({
    _id: req.params.taskId
  }, (err, task) => {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};