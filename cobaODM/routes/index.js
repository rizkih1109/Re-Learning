var express = require('express');
var router = express.Router();
var User = require('../models/User')

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    const { rows: users } = await db.query('SELECT * FROM users WHERE email = $1', [email])

    if (users.length == 0) {
      req.flash('failedInfo', `Email doesn't exixt`)
      return res.redirect('/')
    }

    if (!bcrypt.compareSync(password, users[0].password)) {
      req.flash('failedInfo', `Password is wrong`)
      return res.redirect('/')
    }

    req.session.user = { email: users[0].email }
    req.flash('successInfo', 'Anda berhasil login')

    res.redirect('/users')
  } catch (err) {
    console.log(err)
    res.redirect('/')
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const { email, password, repassword } = req.body

    if (password !== repassword) throw Error(`password doesn't match`)

    const user = await User.findOne({ email })

    if (user) throw Error(`email already exist`)

    const userCreated = await User.create({ email, password })

    const result = await response.json()
    req.flash('successInfo', 'anda berhasil register, silahkan login')
    res.redirect('/')

  } catch (err) {
    console.log(err)
    res.redirect('/')
  }
});

module.exports = router;
