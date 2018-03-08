const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("acme.sqlite", err => {
  if (err) return console.log("db don't work. It's broked");
  console.log("Connection to db successful");
});

module.exports.getCustomers = () => {
  return [{}];
};

module.exports.addCustomer = ({firstName, lastName, city, street, state, zip, phone}) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO customers VALUES(
      null,
      "${firstName}",
      "${lastName}",
      "${city}",
      "${street}",
      "${state}",
      "${zip}",
      "${phone}"
    )`, function(){
      resolve({ id: this.lastID });
    });
  });
};
