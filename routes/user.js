const express = require('express')
const router = express.Router();
// import controller
const { login,register,update,deleteID,test} = require('../controllers/user')
// import verifly token
const {authenticateToken} = require('../middleware/token')


// router.get('/',test)
router.post('/login',authenticateToken,login)
router.post('/register',register)

// router.put('/user/:id',update)
// router.delete('/user/:id',deleteID)

module.exports = router