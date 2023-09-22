import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Link from "next/link";

const Posts = async () => {
	return (
		<div className="w-300">
			<section className=" flex-right flex-col">
				<Link href="register">register </Link>
				<Link href="login">login </Link>
			</section>
		</div>
	);
};

export default Posts;
