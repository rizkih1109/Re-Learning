var express = require('express');
var router = express.Router();
const models = require('../models');
const { where } = require('sequelize');

router.get('/', async (req, res, next) => {
  try {
    const users = await models.User.findAll({ include: models.Todo })
    res.json(users)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body
    const user = await models.User.create({ name })
    res.json(user)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { name } = req.body
    const users = await models.User.update({ name }, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })
    res.json(users[1])
  } catch (err) {
    console.log(err)
    res.json(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const userdata = await models.User.findOne({ where: { id: req.params.id } })
    const user = await models.User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(userdata)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
});

module.exports = router;
