import "../style/TodoListItem.css";

const TodoListItem = ({ label, important = false }) => {
	const styleSpan = {
		color: important ? "red" : "black",
	};

	return (
		<span style={styleSpan} className="todo-list-item">
			{label}
		</span>
	);
};

export default TodoListItem;
