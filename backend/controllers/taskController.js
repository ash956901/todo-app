let tasks = []; 

exports.getTasks = (req, res) => {
  res.status(200).json(tasks);
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Task title is required' });
  }
  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  res.status(201).json(newTask);
};