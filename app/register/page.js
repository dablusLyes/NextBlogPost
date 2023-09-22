"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
const Register = () => {
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	return (
		<div>
			<Link href="/">Return to home page</Link>
			<h1>REGISTER</h1>
			<input
				type="text"
				placeholder="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
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

export default Register;
