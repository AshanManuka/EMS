import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("customers.db");

export const setupDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, balance REAL DEFAULT 0.0);"
    );
  });
};

export const setupBusinessTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS business (id INTEGER PRIMARY KEY AUTOINCREMENT, customerId INTEGER, itemName TEXT, count INTEGER, totalAmount REAL, date TEXT);'
    );
  });
};

export const addCustomer = (name,balance) => {
  db.transaction(
    (tx) => {
        tx.executeSql("INSERT INTO customers (name, balance) VALUES (?, ?);", [name, balance]);
    },
    null,
    () => console.log("Customer added successfully")
  );
};

export const updateBalance = (id, balance) => {
  db.transaction(
    (tx) => {
      tx.executeSql("UPDATE customers SET balance=? WHERE id=?;", [balance, id]);
    },
    null,
    () => console.log("Customer updated successfully")
  );
};


export const getAllBusinessData = (callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM business;', [], (_, { rows }) => {
      const businessData = rows._array;
      callback(businessData);
    });
  });
};

export const searchCustomersByName = (searchName, callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM customers WHERE name LIKE ?;',
        [`%${searchName}%`],
        (_, { rows }) => {
          const result = rows._array;
          callback(result);
        }
      );
    });
  };

  export const addBusinessData = (customerId, itemName, count, totalAmount) => {
    const date = new Date().toISOString().slice(0, 10);
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO business (customerId, itemName, count, totalAmount, date) VALUES (?, ?, ?, ?, ?);',
          [customerId, itemName, count, totalAmount, date]
        );
      },
      null,
      () => console.log('Business saved successfully..!')
    );
  };
  

