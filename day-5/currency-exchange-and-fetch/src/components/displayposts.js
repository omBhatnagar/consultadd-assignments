import { useState } from "react";
import { Button } from "@mantine/core";
import PostsTable from "./poststable";

import "./displayposts.css";

const DisplayPosts = () => {
	const [rows, setRows] = useState([]);

	const fetchPosts = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		const _rows = data.map((row) => (
			<tr key={row.id}>
				<td>{row.title}</td>
				<td>{row.body}</td>
			</tr>
		));
		setRows(_rows);
	};

	return (
		<div className='displayposts-wrapper'>
			<Button
				onClick={fetchPosts}
				className='fetch-button'
				variant='gradient'
				gradient={{ from: "indigo", to: "cyan" }}
			>
				Fetch Posts
			</Button>
			<PostsTable rows={rows} />
		</div>
	);
};

export default DisplayPosts;
