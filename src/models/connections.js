const mongoose = require('mongoose');

module.exports = (dbUri) => {
  const db = mongoose.createConnection(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  db.on('error', function (err) {
    db.close().catch(() => {
      console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(err)}`);
      db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
    });
  });

  db.on('connected', function () {
    mongoose.set('debug', function (col, method, query, doc) {
      console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
    });
    console.log(`MongoDB :: connected ${this.name}`);
  });

  db.on('disconnected', function () {
    console.log(`MongoDB :: disconnected ${this.name}`);
  });

  return db;
};
