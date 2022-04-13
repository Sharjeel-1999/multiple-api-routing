const express = require("express");
const router = express.Router();
const authCon = require('../controller/authControllers/index')



router.post('/create_user',authCon.authCreateUser)

router.get('/get_all_user',authCon.authGetAllUsers)

router.delete('/users/:id',authCon.authdeletedata)

router.put('/update/:id',authCon.authupdate)

router.get('/homepage',authCon.authuserhomepage)



module.exports = router