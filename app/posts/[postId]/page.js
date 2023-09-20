import React from "react";

const Page = async ({ params }) => {
	const data = await fetch("http://localhost:3000/api/detailPost", {
		data: params,
	});

	const res = await data.json();
	return <div> dz : {params.postId}</div>;
};

export default Page;
