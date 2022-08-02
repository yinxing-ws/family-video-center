import { Api, Get } from '@midwayjs/hooks';
const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database(':memory');

export const getDate = Api(Get(), async () => {
  // db.serialize(() => {
  //   // db.run('CREATE TABLE lorem (info TEXT)');

  //   // const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
  //   // for (let i = 0; i < 10; i++) {
  //   //   stmt.run('Ipsum ' + i);
  //   // }
  //   // stmt.finalize();

  //   let t = db.run('SELECT rowid AS id, info FROM lorem', (err) => {
  //     console.log(err);
  //   });
  //   console.log(t);
  // });

  // db.close();

  return new Date().toString();
});
