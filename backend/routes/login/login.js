const express = require('express');
const routerLogin = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dashboard',
});

routerLogin.get('/', (req, res) => {
  const sql = 'SELECT * FROM login';
  db.query(sql, (err, data) => {
    if (err) return res.json('Error');
    return res.json(data);
  });
});
// routerLogin.post('/', (req, res) => {
//   const sql = 'SELECT * FROM login WHERE Email = ? AND Password = ?';
//   db.query(sql, [req.body.Email, req.body.Password], (err, data) => {
//     if (err) return res.json('Error');
//     if (data.length > 0) {
//       return res.json('Login success');
//     } else {
//       return res.json('No record');
//     }
//   });
// });

routerLogin.post('/', (req, res) => {
  const { Email, Password } = req.body;
  const sql = 'INSERT INTO login (Email, Password) VALUES (?, ?)';
  db.query(sql, [Email, Password], (err, result) => {
    if (err) return res.json('Error');
    return res
      .status(201)
      .json({ success: true, message: 'Đăng ký thành công.' });
  });
});

routerLogin.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Email, Password } = req.body;
  const sql = 'UPDATE login SET Email = ?, Password = ? WHERE id = ?';
  db.query(sql, [Email, Password, id], (err, result) => {
    if (err) return res.json('Error');
    return res.json('Update success');
  });
});

routerLogin.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM login WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.json('Error');
    return res.json('Delete success');
  });
});
module.exports.routerLogin = routerLogin;
