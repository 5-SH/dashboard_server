const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.json());
app.use(
  session({
    secret: 'express',
    resave: false,
    saveUninitialized: true
  })
);

const PORT = process.env.PORT || 4000;

var connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'dashboard_proto'
});

insertData = () => {
  rn = Math.floor(Math.random() * 100);
  const date = [
    '202003020800',
    '202003020900',
    '202003021100',
    '202003021200',
    '202003021300',
    '202003021400',
    '202003021500',
    '202003021600',
    '202003021700',
    '202003021800',
    '202003021900',
    '202003022000',
    '202003022100',
    '202003022200',
    '202003022300',
    '202003022400',
    '202003030800',
    '202003030900',
    '202003031000',
    '202003031100',
    '202003031200',
    '202003031300',
    '202003031400',
    '202003031500',
    '202003031600',
    '202003031700',
    '202003031800',
    '202003031900',
    '202003032000',
    '202003032100',
    '202003032200',
    '202003032300',
    '202003032400'
  ];

  const statement = [
    "INSERT INTO tb_data(node_cd, data, issue_dt) VALUES('db_001', " +
      "'" +
      rn +
      "', " +
      "'" +
      date[Math.floor(Math.random() * date.length)] +
      "'" +
      ');',
    "INSERT INTO tb_data(node_cd, data, issue_dt) VALUES('db_002', " +
      "'" +
      rn +
      "', " +
      "'" +
      date[Math.floor(Math.random() * date.length)] +
      "'" +
      ');',
    "INSERT INTO tb_data(node_cd, data, issue_dt) VALUES('db_003', " +
      "'" +
      rn +
      "', " +
      "'" +
      date[Math.floor(Math.random() * date.length)] +
      "'" +
      ');',
    "INSERT INTO tb_data(node_cd, data, issue_dt) VALUES('plc_001', " +
      "'" +
      rn +
      "', " +
      "'" +
      date[Math.floor(Math.random() * date.length)] +
      "'" +
      ');',
    "INSERT INTO tb_data(node_cd, data, issue_dt) VALUES('plc_002', " +
      "'" +
      rn +
      "', " +
      "'" +
      date[Math.floor(Math.random() * date.length)] +
      "'" +
      ');',
    "INSERT INTO tb_data(node_cd, data, issue_dt) VALUES('plc_003', " +
      "'" +
      rn +
      "', " +
      "'" +
      date[Math.floor(Math.random() * date.length)] +
      "'" +
      ');'
  ];

  //console.log(statement);

  connection.query(
    statement[Math.floor(Math.random() * statement.length)],
    (error, rows, fields) => {
      if (error) {
        console.log('err: ' + error);
      } else {
      }
    }
  );
};

let idx_001 = 0;
insert_Pd001_Data = () => {
  const pd_001_data = [
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (140, 120, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (190, 120, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (240, 130, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (290, 130, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (340, 120, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (400, 110, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (450, 110, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 120, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (570, 120, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (600, 120, 'db_001', 'db_001_pd_001');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (640, 150, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (640, 210, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (640, 270, 'db_001', 'db_001_pd_001');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (550, 290, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 290, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (450, 290, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (400, 290, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (350, 290, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (300, 290, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (250, 295, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (200, 290, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (150, 290, 'db_001', 'db_001_pd_001');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 330, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 380, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 420, 'db_001', 'db_001_pd_001');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (140, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (190, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (240, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (290, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (340, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (400, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (440, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (540, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (600, 460, 'db_001', 'db_001_pd_001');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (650, 460, 'db_001', 'db_001_pd_001');"
  ];

  connection.query(pd_001_data[idx_001++ % pd_001_data.length], (error, rows, fields) => {
    if (error) {
      console.log('err: ' + error);
    } else {
    }
  });
};

let idx_002 = 0;
insert_Pd002_Data = () => {
  const pd_002_data = [
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (140, 120, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (190, 120, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (240, 130, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (290, 130, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (340, 120, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (400, 110, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (450, 110, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 120, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (540, 120, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (580, 120, 'db_001', 'db_001_pd_002');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (640, 150, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (640, 210, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (650, 270, 'db_001', 'db_001_pd_002');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (550, 290, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 290, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (450, 290, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (400, 290, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (350, 290, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (300, 290, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (250, 295, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (200, 290, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (150, 290, 'db_001', 'db_001_pd_002');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 330, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 380, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 420, 'db_001', 'db_001_pd_002');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (140, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (200, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (240, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (290, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (340, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (390, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (440, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (540, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (600, 460, 'db_001', 'db_001_pd_002');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (650, 460, 'db_001', 'db_001_pd_002');"
  ];

  connection.query(pd_002_data[idx_002++ % pd_002_data.length], (error, rows, fields) => {
    if (error) {
      console.log('err: ' + error);
    } else {
    }
  });
};

let idx_003 = 0;
insert_Pd003_Data = () => {
  const pd_003_data = [
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (140, 120, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (190, 120, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (240, 130, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (290, 130, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (340, 120, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (400, 110, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (450, 110, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 120, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (550, 120, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (610, 120, 'db_001', 'db_001_pd_003');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (640, 160, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (640, 210, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (650, 270, 'db_001', 'db_001_pd_003');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (550, 290, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 290, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (450, 290, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (400, 290, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (350, 290, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (300, 290, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (250, 295, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (200, 290, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (150, 290, 'db_001', 'db_001_pd_003');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 330, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 380, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (120, 420, 'db_001', 'db_001_pd_003');",

    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (140, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (190, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (240, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (290, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (340, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (390, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (440, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (500, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (540, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (600, 460, 'db_001', 'db_001_pd_003');",
    "INSERT INTO `tb_product_position` (`pos_x`, `pos_y`, `node_cd`, `product_cd`) VALUES (650, 460, 'db_001', 'db_001_pd_003');"
  ];

  connection.query(pd_003_data[idx_003++ % pd_003_data.length], (error, rows, fields) => {
    if (error) {
      console.log('err: ' + error);
    } else {
    }
  });
};

connection.connect();
const init = () => {
  setInterval(insertData, 1000);

  // setInterval(insert_Pd001_Data, 1000);

  // setTimeout(() => {
  //   setInterval(insert_Pd002_Data, 1000);
  // }, 1000);

  // setTimeout(() => {
  //   setInterval(insert_Pd003_Data, 1000);
  // }, 2000);
};
init();

app.use(express.static(path.join(__dirname, '..', 'public/')));

app.get('/nodes', (req, res) => {
  const statement = 'SELECT * FROM tb_nodes';
  connection.query(statement, (error, rows, fields) => {
    if (error) {
      console.log('err: ' + error);
    } else {
      var parsedRows = JSON.parse(JSON.stringify(rows));
      const result = { nodes: parsedRows };
      // console.log(result);
      res.send(result);
    }
  });
});

app.get('/data', (req, res) => {
  const node_cd = req.query.node_cd;
  const statement = "SELECT * FROM tb_data WHERE node_cd='" + node_cd + "'";
  connection.query(statement, (error, rows, fields) => {
    if (error) {
      console.log('err: ' + error);
    } else {
      var parsedRows = JSON.parse(JSON.stringify(rows));
      const result = { data: parsedRows };
      // console.log(result);
      res.send(result);
    }
  });
});

app.get('/tasks', (req, res) => {
  const statement = 'SELECT * FROM tb_tasks';
  connection.query(statement, (error, rows, fields) => {
    if (error) {
      console.log('err: ' + error);
    } else {
      var parsedRows = JSON.parse(JSON.stringify(rows));
      const result = { tasks: parsedRows };
      // console.log(result);
      res.send(result);
    }
  });
});

app.get('/counts', (req, res) => {
  const date = req.query.date;
  const statement =
    "SELECT d.issue_dt, COUNT(d.data_seq) AS count FROM tb_data d WHERE d.issue_dt REGEXP '" +
    date +
    '|' +
    (date - 1) +
    "'" +
    'GROUP BY d.issue_dt';
  connection.query(statement, (error, rows, fields) => {
    if (error) {
      console.log('err: ' + error);
    } else {
      var parsedRows = JSON.parse(JSON.stringify(rows));
      const result = { counts: parsedRows };
      // console.log(result);
      res.send(result);
    }
  });
});

app.get('/positions', (req, res) => {
  const node_cd = req.query.node_cd;
  const statement =
    'SELECT p1.pos_seq, p1.pos_x, p1.pos_y, p1.node_cd, p1.product_cd, p.product_nm, p.state ' +
    'FROM tb_product_position p1, ' +
    '(SELECT MAX(pos_seq) AS max_pos_seq FROM tb_product_position GROUP BY product_cd) p2, ' +
    'tb_product p ' +
    'WHERE p1.pos_seq = p2.max_pos_seq ' +
    "AND p1.node_cd = '" +
    node_cd +
    "' " +
    'AND p1.product_cd = p.product_cd ' +
    "AND p.state = 'ongoing'";

  connection.query(statement, (error, rows, fields) => {
    if (error) {
      console.log('err: ' + error);
    } else {
      var parsedRows = JSON.parse(JSON.stringify(rows));
      const result = { positions: parsedRows };

      // console.log(result);

      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
