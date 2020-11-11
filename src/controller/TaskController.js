const TaskModel = require('../model/TaskModel');

class TaskController {
  /* vai criar uma nova tarefa no banco de dados */
  // eslint-disable-next-line class-methods-use-this
  async create(req, res) {
    const task = new TaskModel(req.body);
    await task
      .save()
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }
}
module.export = new TaskController();
