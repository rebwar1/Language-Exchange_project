import query from '../../connection.js';

async function populateTable() {
  const res = await query(
    `INSERT INTO learners (first_name, last_name, languages_speak, languages_interested)
          VALUES ($1, $2, $3, $4) RETURNING *`,
    [first_name, last_name, languages_speak, languages_interested]
  );
  console.log(res);
}
populateTable();

// how to delete a table in postgres=> drop table learners;
// how to delete a database in postgres=> drop database mydatabase;
