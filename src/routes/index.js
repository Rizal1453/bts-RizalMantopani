const express = require('express')

const router = express.Router()

// Controller
// import controller function here 
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user')
const { register, login, checkAuth } = require("../controllers/auth");
const {addCeklis,getCekliss,deleteCeklis,updateCeklis}= require('../controllers/ceklis')
const {addceklisitem,getceklisitems,deleteceklisitem,updateceklisitem}= require('../controllers/ceklisitem')
// Middleware
// import middleware here
const {auth} = require('../middlewares/auth')


// Route
router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)
// add route here
router.delete('/user/:id', deleteUser)

router.post('/addceklis',auth,addCeklis)
router.get('/cekliss',auth,getCekliss)
router.delete('/ceklis/:id',auth,deleteCeklis)
router.patch('/ceklis/:id',auth,updateCeklis)

router.post('/additem',auth,addceklisitem)
router.get('/item',auth,getceklisitems)
router.delete('/item/:id',auth,deleteceklisitem)
router.patch('/item/:id',auth,updateceklisitem)



// add route here
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);
module.exports = router