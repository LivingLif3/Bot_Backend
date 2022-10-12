const Router = require('express').Router;
const AccountRouter = require('./account-router');

const router = new Router();

router.use('/api', AccountRouter);

module.exports = router;
