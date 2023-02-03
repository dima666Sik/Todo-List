const TodoListItem = ({ label, important = false }) => {
	const styleSpan = {
		color: important ? "red" : "black",
	};

	return <span style={styleSpan}>{label}</span>;
};

export default TodoListItem;
