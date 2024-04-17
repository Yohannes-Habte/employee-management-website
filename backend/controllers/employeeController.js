import con from '../utils/db.js';
import bcrypt from 'bcryptjs';

// ===========================================================================================
// Register New Employee
// ===========================================================================================

export const addEmployee = async (req, res, next) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    gender,
    birthDate,
    phoneNumber,
    profession,
    salary,
    language,
    category,
    address,
    agree,
  } = req.body;

  const image = req.file.filename;
  // console.log('Image=', image);
  // console.log('Req.file=', req.file);

  try {
    const sql = `INSERT INTO employeetable (first_name, middle_name, last_name, email, password, image, gender, birth_date, profession, language, phone_number, category_id, salary, address, agree ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    bcrypt.hash(password, 10, (err, hash) => {
      const values = [
        firstName,
        middleName,
        lastName,
        email,
        hash,
        image,
        gender,
        birthDate,
        profession,
        language,
        phoneNumber,
        category,
        salary,
        address,
        agree,
      ];

      con.query(sql, values, (err, result) => {
        if (err) return res.json({ success: false, message: 'Query Error' });

        return res.json({ success: true });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// ====================================================================================================
// Get all Categories
// ====================================================================================================

export const getAllEmployees = async (req, res, error) => {
  try {
    const sql = 'SELECT * FROM employeetable';

    con.query(sql, (err, result) => {
      if (err) return res.json({ success: false, message: 'Query Error' });

      return res.json({ success: true, result: result });
    });
  } catch (error) {
    console.log(error);
  }
};

// ===========================================================================================
// Update Employee
// ===========================================================================================

export const getSingleEmployee = async (req, res, error) => {
  try {
    const id = req.params.id;
    const sql = 'SELECT * FROM employeetable WHERE id = ?';

    con.query(sql, [id], (err, result) => {
      if (err) return res.json({ success: false, message: 'Query Error' });

      return res.json({ success: true, result: result });
    });
  } catch (error) {
    console.log(error);
  }
};

// ===========================================================================================
// Update Employee
// ===========================================================================================

export const updateEmployeeAccount = async (req, res, error) => {
  try {
    const id = req.params.id;
    const sql = 'SELECT * FROM employeetable WHERE id = ?';
    console.log('Employee Id =', id);

    con.query(sql, [id], (err, result) => {
      if (err) return res.json({ success: false, message: 'Query Error' });

      return res.json({ success: true, result: result });
    });
  } catch (error) {
    console.log(error);
  }
};
