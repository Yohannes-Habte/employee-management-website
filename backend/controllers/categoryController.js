import con from '../utils/db.js';

// ===============================================================================================
// Create a Category
// ===============================================================================================

export const createCategory = async (req, res, error) => {
  const { categoryName, description, keywords, agree } = req.body;
  try {
    const sql = `insert into categorytable (cateory_name, description, keywords, agree) VALUES (?, ?, ?, ?)`;

    con.query(
      sql,
      [categoryName, description, keywords, agree],
      (err, result) => {
        if (err) return res.json({ success: false, message: 'Query Error' });

        return res.json({ success: true });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// ====================================================================================================
// Get all Categories
// ====================================================================================================

export const getAllCategories = async (req, res, error) => {
  try {
    const sql = 'SELECT * FROM categorytable';

    con.query(sql, (err, result) => {
      if (err) return res.json({ success: false, message: 'Query Error' });

      return res.json({ success: true, result: result });
    });
  } catch (error) {
    console.log(error);
  }
};
