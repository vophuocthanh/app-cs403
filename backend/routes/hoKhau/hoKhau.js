const express = require('express');
const routerHoKhau = express.Router();
const { db } = require('../../modules/server-database');

routerHoKhau.get('/', (req, res) => {
  const sql = 'SELECT * FROM ho_khau';
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json(data);
  });
});

routerHoKhau.get('/:id', (req, res) => {
  const mahokhau = req.params.id;
  const sql = 'SELECT * FROM ho_khau WHERE mahokhau = ?';
  db.query(sql, [mahokhau], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy HoKhau' });
    }
    return res.json(data[0]);
  });
});

routerHoKhau.post('/', (req, res) => {
  const { mahokhau, tenchuho, diachi } = req.body;
  const sql =
    'INSERT INTO ho_khau (mahokhau, tenchuho, diachi) VALUES (?, ?, ?)';
  const values = [mahokhau, tenchuho, diachi];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(201).json({
      message: 'Hộ khẩu đã được tạo',
      mahokhau: data.insertId,
    });
  });
});

routerHoKhau.put('/:id', (req, res) => {
  const mahokhau = req.params.id;
  const updatedHoKhau = req.body;
  const sql = 'UPDATE ho_khau SET ? WHERE mahokhau = ?';
  db.query(sql, [updatedHoKhau, mahokhau], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: 'Không tìm thấy HoKhau để cập nhật' });
    }
    return res.json({ message: 'HoKhau đã được cập nhật', id: mahokhau });
  });
});

routerHoKhau.delete('/:id', (req, res) => {
  const mahokhau = req.params.id;
  const sql = 'DELETE FROM ho_khau WHERE mahokhau = ?';
  db.query(sql, [mahokhau], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy HoKhau để xóa' });
    }
    return res.json({ message: 'HoKhau đã được xóa', id: mahokhau });
  });
});

module.exports.routerHoKhau = routerHoKhau;
