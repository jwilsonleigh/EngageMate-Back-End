const {query} = require('../index.js')


const sqlStatement = `
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    uuid VARCHAR,
    bootcamperId INT,
    firstName TEXT,
    surname TEXT,
    role TEXT,
    cohortNo INT,
    email VARCHAR
)`;

const createTable = async () => {
    const result = await query(sqlStatement);
    console.log(result)
}
createTable()