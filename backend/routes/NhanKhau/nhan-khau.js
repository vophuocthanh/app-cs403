const express = require('express');
const routerNhanKhau = express.Router();
const { db } = require('../../modules/server-database');

routerNhanKhau.get('/', (req, res) => {
  const sql = 'SELECT * FROM nhan_khau';
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json(data);
  });
});

routerNhanKhau.get('/:id', (req, res) => {
  const idPayRates = req.params.id;
  const sql = 'SELECT * FROM nhan_khau WHERE ma_nhan_khau = ?';
  db.query(sql, [idPayRates], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy Pay Rates' });
    }
    return res.json(data[0]);
  });
});

routerNhanKhau.post('/', (req, res) => {
  const {
    ma_nhan_khau,
    ho_va_ten,
    mahokhau,
    quan_he_voi_chu_ho,
    bi_danh,
    ngay_sinh,
    noi_sinh,
    gioi_tinh,
    so_dien_thoai,
    quoc_tich,
    dan_toc,
    ton_giao,
    cong_viec,
    nguyen_quan,
    dia_chi_thuong_tru,
    dia_chi_tam_tru,
    cccd,
    ngay_cap,
    noi_cap,
  } = req.body;
  const sql =
    'INSERT INTO nhan_khau (ma_nhan_khau, ho_va_ten, mahokhau, quan_he_voi_chu_ho, bi_danh, ngay_sinh, noi_sinh, 	gioi_tinh, so_dien_thoai, quoc_tich, dan_toc, ton_giao, cong_viec, nguyen_quan, dia_chi_thuong_tru, dia_chi_tam_tru, cccd, ngay_cap, noi_cap) VALUES (?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    ma_nhan_khau,
    ho_va_ten,
    mahokhau,
    quan_he_voi_chu_ho,
    bi_danh,
    ngay_sinh,
    noi_sinh,
    gioi_tinh,
    so_dien_thoai,
    quoc_tich,
    dan_toc,
    ton_giao,
    cong_viec,
    nguyen_quan,
    dia_chi_thuong_tru,
    dia_chi_tam_tru,
    cccd,
    ngay_cap,
    noi_cap,
  ];
  db.query(sql, values, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res
      .status(201)
      .json({ message: 'Nhân khẩu đã được tạo', ma_nhan_khau: data.insertId });
  });
});

routerNhanKhau.put('/:id', (req, res) => {
  const ma_nhan_khau = req.params.id;
  const updatedPayRates = req.body;
  const sql = 'UPDATE nhan_khau SET ? WHERE ma_nhan_khau = ?';
  db.query(sql, [updatedPayRates, ma_nhan_khau], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: 'Không tìm thấy Nhân Khẩu để cập nhật' });
    }
    return res.json({
      message: 'Nhân Khẩu đã được cập nhật',
      id: ma_nhan_khau,
    });
  });
});

routerNhanKhau.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM nhan_khau WHERE ma_nhan_khau = ?';
  db.query(sql, [userId], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: 'Không tìm thấy Nhân Khẩu để xóa' });
    }
    return res.json({ message: 'Nhân Khẩu đã được xóa', id: userId });
  });
});

module.exports.routerNhanKhau = routerNhanKhau;
