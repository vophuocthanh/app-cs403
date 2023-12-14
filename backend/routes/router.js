const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/hokhau', require('./hoKhau/hoKhau').routerHoKhau);
router.use('/nhankhau', require('./NhanKhau/nhan-khau').routerNhanKhau);

module.exports = router;
