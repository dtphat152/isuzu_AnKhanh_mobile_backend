const express = require('express');
const router = express.Router();

const vtpt_gc = require('../controller/vtpt_gc.controller');

router.route('/')
    .get(vtpt_gc.findOne);


module.exports = router;