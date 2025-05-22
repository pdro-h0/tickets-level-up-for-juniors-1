import * as mysql from "mysql2/promise";

export class Database {
  private static instace: mysql.Pool;

  private constructor() {}

  public static getInstance(): mysql.Pool {
    if (!Database.instace) {
      Database.instace = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "root",
        database: "tickets",
        port: 33060,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
    }

    return Database.instace;
  }
}
