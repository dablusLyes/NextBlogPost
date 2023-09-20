import Image from "next/image";
import styles from "./page.module.css";

import React from "react";
import Link from "next/link";

const Posts = async () => {
	const res = await fetch("http://localhost:3000/api/posts");
	const data = await res.json();
	console.log(process.env.DZ);
	return (
		<div>
			{data.map((el) => {
				return (
					<Link
						href={`posts/${el.postID}`}
						key={el.postID}
					>
						{el.title}
					</Link>
				);
			})}
		</div>
	);
};

export default Posts;
