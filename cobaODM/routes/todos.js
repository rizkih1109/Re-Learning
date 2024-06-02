var express = require('express');
var router = express.Router();
const Todo = require('../models/Todo')
const User = require('../models/User');
const { tokenValid, Response } = require('../helpers/util');

router.get('/', tokenValid, async (req, res, next) => {
  try {
    const { title, complete, page = 1, sortBy = '_id', sortMode = 'asc' } = req.query
    const params = { executor: req.user.userid }
    const limit = 3
    const offsite = (page - 1) * limit
    const sort = {}
    sort[sortBy] = sortMode

    if (title) {
      params['title'] = new RegExp(title, 'i')
    }

    if (complete) {
      params['phone'] = JSON.parse(complete)
    }

    const total = await Todo.countDocuments(params)
    const pages = Math.ceil(total / limit)

    const todos = await Todo.find(params).populate('executor').sort(sort).limit(limit).skip(offsite)
    res.json(new Response({
      todos, 
      page: Number(page), 
      pages
    }))
  } catch (err) {
    res.status(500).json(new Response(err.message, false))
  }
});

router.post('/', tokenValid, async (req, res, next) => {
  try {
    const { title } = req.body
    const todo = await Todo.create({ title, executor: req.user.userid })
    const user = await User.findById(req.user.userid)
    user.todos.push(todo)
    await user.save()
    res.json(todo)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err })
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { title, complete } = req.body
    const todo = await Todo.findByIdAndUpdate(req.params.id, { title, complete }, { new: true })
    res.json(todo)
  } catch (err) {
    res.status(500).json({ err })
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    res.json(todo)
  } catch (err) {
    res.status(500).json({ err })
  }
});

module.exports = router;
