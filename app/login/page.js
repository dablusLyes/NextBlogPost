"use client";
import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	return (
		<div>
			<Link href="/">Return to home page</Link>
			<h1>LOGIN</h1>
			<input
				type="text"
				placeholder="username"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="text"
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
		</div>
	);
};

export default Login;
