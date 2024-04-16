import con from '../utils/db.js';
import bcrypt from 'bcryptjs';

// ==========================================
// Login Employee and image upload
// ==========================================

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

  const { image } = req.file.filename;
  console.log("Image=", image)

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
        console.log(err);
        if (err) return res.json({ success: false, message: 'Query Error' });

        return res.json({ success: true });
      });
    });
  } catch (error) {
    console.log(error);
  }
};
