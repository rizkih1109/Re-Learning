var express = require('express');
var router = express.Router();
const models = require('../models');
const { generateToken } = require('../helpers/util')

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await models.User.findOne({ where: { email } })

    if (!user) throw Error(`User doesn't exist`)

    if (!user.checkPassword(password)) throw Error(`Password is wrong`)

    const token = generateToken({ userid: user.id })

    res.json({
      success: true,
      data: {
        email: user.email,
        token
      }
    })

  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, message: err.message })
  }
});

module.exports = router;
