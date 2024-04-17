import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

// ===========================================================================================
// Login Employee
// ===========================================================================================
export const loginEmployee = async (req, res, error) => {
  const sql = 'SELECT * from adminTable where email = ? and password = ?';
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: 'Query Error' });

    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: 'admin', email: email },
        'jwt_secrete_key',
        {
          expiresIn: '1d',
        }
      );

      res.cookie("token", token)
      return res.json({ loginStatus: true});
    } else {
        return res.json({ loginStatus: false, Error: 'Wrong email or password!' });
    }
  });
};
