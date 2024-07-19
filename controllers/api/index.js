const router = require('express').Router();
const cardRoutes = require('./cards');
const userRoutes = require('./userRoutes');

router.use('/cards', cardRoutes);
router.use('/user', userRoutes);

module.exports = router;