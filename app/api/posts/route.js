import pool from "../lib/db.js";
export async function GET(req) {
	console.log(req);
	let conn = await pool.getConnection();
	let result = await conn.query("select * from posts");
	pool.end();
	return new Response(JSON.stringify(result));
}
