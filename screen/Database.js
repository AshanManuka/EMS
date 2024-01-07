import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("customers.db");

export const setupDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, balance REAL DEFAULT 0.0);"
    );
  });
};

export const addCustomer = (name,balance) => {
  db.transaction(
    (tx) => {
        tx.executeSql("INSERT INTO customers (name, balance) VALUES (?, ?);", [name, balance]);
    },
    null,
    () => console.log("Customer added successfully") // Handle success
  );
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

// You can add more functions here for querying or updating the database
