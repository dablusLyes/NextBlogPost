import mariadb from "mariadb";

const pool = mariadb.createPool({
	host: "localhost",
	user: "root",
	password: "secretpassword",
	database: "risklickdb",
});

export default pool;
