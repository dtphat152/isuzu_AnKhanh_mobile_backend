const KhachHangModel = require('../model/khachhang.model');

exports.getKhachHangByTen_controller = async (req, res, next) => {
    try {
        const khachHang = await KhachHangModel.getKHByName(req.body.ten);
        res.status(200).json(khachHang);
    } catch (error) {
        next(error);
    }
}
