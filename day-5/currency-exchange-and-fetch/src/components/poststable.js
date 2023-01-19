import { Table } from "@mantine/core";

const PostsTable = ({ rows }) => {
	return (
		<Table className='posts-table'>
			<thead>
				<tr>
					<th>Title</th>
					<th>Body</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
};

export default PostsTable;
