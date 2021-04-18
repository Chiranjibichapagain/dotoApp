const User = require('../model/user');
const Todo = require('../model/todo');
const { tokenExtractor } = require('../helpers/middlewares');

const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const savedTodo = await new Todo({ title, description }).save();
    const { id } = savedTodo;

    if (id) {
      const decodedToken = tokenExtractor(req);
      const { userId } = decodedToken;

      // save todo to the user
      User.findOneAndUpdate(
        { _id: userId },
        { $push: { todos: id } },
        { upsert: true }
      )
        .then((result) => {
          res.json({ Message: `Todo ${id} saved to ${userId}` });
        })
        .catch((error) => {
          throw new Error('New Todo not saved to the user!');
        });
    } else {
      throw new Error('Todo not created!');
    }
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });
    if (todo) {
      const { title, description } = req.body;

      const updates = {
        title: title ? title : todo.title,
        description: description ? description : todo.description,
      };

      await Todo.findByIdAndUpdate(todoId, updates, { new: true })
        .then((result) => {
          res
            .status(200)
            .json({ Message: `Todo ${todoId} successfully updated`, result });
        })
        .catch((error) => {
          throw new Error('Todo not updated');
        });
    } else {
      throw new Error('Todo with the given id not found');
    }
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const deleteTodo = async (req, res, next) => {
  res.send('connection established');
};

module.exports = { addTodo, updateTodo, deleteTodo };
