const express = require('express');
const router = express.Router();

const KhachHangController = require('../controller/khachhang.controller');

router.route('/')
    .get(KhachHangController.getKhachHangByTen_controller);


module.exports = router;
