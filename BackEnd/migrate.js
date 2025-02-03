const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
  migratePasswords();
});

function migratePasswords() {
  db.query('SELECT id, password FROM users', async (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return;
    }

    for (const user of results) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      db.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, user.id], (err, res) => {
        if (err) {
          console.error(`Error updating password for user ${user.id}:`, err);
        } else {
          console.log(`Password updated for user ${user.id}`);
        }
      });
    }
  });
}
