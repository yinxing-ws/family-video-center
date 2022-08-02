import sqlite3 from 'sqlite3';
const dbFile = 'my.db';

let dbInstance: sqlite3.Database = null;

const getDB = (): sqlite3.Database => {
  if (dbInstance === null) dbInstance = new sqlite3.Database(dbFile);

  return dbInstance;
};

const runSql = async (sql: string) =>
  new Promise((resolve, reject) => {
    const db = getDB();
    db.run(sql, (err) => {
      reject(err);
    });
  });
