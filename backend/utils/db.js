import mysqul from 'mysql';

const con = mysqul.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employeemanagement',
});

con.connect(function (err) {
  if (err) {
    console.log('Connection Error');
  } else {
    console.log('Connected');
  }
});
