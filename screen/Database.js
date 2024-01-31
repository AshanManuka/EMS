import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("newenet.db");

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
      'CREATE TABLE IF NOT EXISTS business (id INTEGER PRIMARY KEY AUTOINCREMENT, customerId INTEGER, customerName TEXT, itemName TEXT, count INTEGER, totalAmount REAL, date TEXT);'
    );
  });
};

export const setupItemTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS item (id INTEGER PRIMARY KEY AUTOINCREMENT, itemName TEXT, description TEXT, qty INTEGER, price REAL);'
    );
  });
};

export const setupQuickItemTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS quickitem (id INTEGER PRIMARY KEY AUTOINCREMENT, itemName TEXT);'
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

export const addQuickItem = (name) => {
  db.transaction(
    (tx) => {
        tx.executeSql("INSERT INTO quickitem (itemName) VALUES (?);", [name]);
    },
    null,
    () => console.log("QuickItem added successfully")
  );
};

export const addItem = (name,description,qty,unitPrice) => {
  db.transaction(
    (tx) => {
        tx.executeSql("INSERT INTO item (itemName, description, qty, price) VALUES (?, ?, ?, ?);", [name,description,qty,unitPrice]);
    },
    null,
    () => console.log("Item added successfully")
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

export const updateItemInDatabase = (id, name, description, qty, unitPrice) => {
  db.transaction(
    (tx) => {
      tx.executeSql("UPDATE item SET itemName=?, description=?, qty=?, price=? WHERE id=?;", [name, description, qty, unitPrice, id]);
    },
    null,
    () => console.log("Item updated successfully")
  );
};

export const updateItemCount = (id, qty) => {
  db.transaction(
    (tx) => {
      tx.executeSql("UPDATE item SET qty=? WHERE id=?;", [qty, id]);
    },
    null,
    () => console.log("Item updated successfully")
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

export const getAllQuickItem = (callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM quickitem;', [], (_, { rows }) => {
      const items = rows._array;
      callback(items);
    });
  });
};

export const getTodayBusinessData = (callback) => {
  const today = new Date().toISOString().slice(0, 10);

  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM business WHERE date = ?;',
      [today],
      (_, { rows }) => {
        const todayBusinessData = rows._array;
        callback(todayBusinessData);
      }
    );
  });
};

export const getSelectedDateBusinessData = (date, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM business WHERE date = ?;',
      [date],
      (_, { rows }) => {
        const todayBusinessData = rows._array;
        callback(todayBusinessData);
      }
    );
  });
};

export const getItemById = (itemId, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM item WHERE id = ?;',
      [itemId],
      (_, { rows }) => {
        const result = rows._array[0];
        callback(result);
      },
      (_, error) => {
        console.error('Error executing SQL query:', error);
      }
    );
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

  export const searchItemByName = (searchName, callback) => {
    console.log(searchName)
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM item WHERE itemName LIKE ?;',
        [`%${searchName}%`],
        (_, { rows }) => {
          const result = rows._array;
          callback(result);
        }
      );
    });
  };


  export const searchCustomerNameById = (customerId, callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT name FROM customers WHERE id = ?;',
        [customerId],
        (_, { rows }) => {
          const customerName = rows.item(0)?.name || null;
          callback(customerName);
        }
      );
    });
  };

  export const addBusinessData = (customerId, customerName, itemName, count, totalAmount) => {
    const date = new Date().toISOString().slice(0, 10);
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO business (customerId, customerName, itemName, count, totalAmount, date) VALUES (?, ?, ?, ?, ?, ?);',
          [customerId, customerName, itemName, count, totalAmount, date]
        );
      },
      null,
      () => console.log('Business saved successfully..!')
    );
  };


  export const saveBusiness = (customerId, customerName, selectedItem) => {
    if (!Array.isArray(selectedItem)) {
      console.error('Invalid selectedItem:', selectedItem);
      return;
    }
  
    const date = new Date().toISOString().slice(0, 10);
    db.transaction(
      (tx) => {
        selectedItem.forEach((element) => {
          tx.executeSql(
            'INSERT INTO business (customerid, customerName, itemName, count, totalAmount, date) VALUES (?, ?, ?, ?, ?, ?)',
            [customerId, customerName, element.name, element.count, element.total, date]
          );
        });
      },
      null,
      () => console.log('Business saved successfully..!')
    );
  };
  
  

