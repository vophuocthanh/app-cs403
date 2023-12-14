const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// router.use('/users', require('./users/users').routerUsers);
router.use('/hokhau', require('./hoKhau/hoKhau').routerEmployee);
router.use('/nhankhau', require('./NhanKhau/nhan-khau').routerPayRates);
// router.use('/login', require('./login/login').routerLogin);

module.exports = router;
