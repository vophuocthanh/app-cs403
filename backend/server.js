const sql = require('mssql/msnodesqlv8');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { db } = require('./modules/server-database.js');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/router.js'));

db.connect((err) => {
  if (err) throw err;
  console.log('Kết nối MySQL thành công');
});

app.listen(8089, () => {
  console.log('Ứng dụng trên cọng http://localhost:8089/');
});
