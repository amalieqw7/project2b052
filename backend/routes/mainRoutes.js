const express = require('express');
const router = express.Router();

//const userRoute = require('./userRoutes');
const inventoryRoute = require('./inventoryRoutes')

//router.use("/user", userRoute);
router.use('/inventory', inventoryRoute);

module.exports = router;

