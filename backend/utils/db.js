import mysqul from 'mysql';

const con = mysqul.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employeemanagement',
  port: 3307,
});

con.connect(function (err) {
  if (err) {
    console.log('Connection Error:', err);
  } else {
    console.log('DB is Connected');
  }
});

export default con;
