import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
	const list = todoList.map((currentValue) => {
		const { id, ...otherProps } = currentValue;

		return (
			<li key={id}>
				<TodoListItem {...otherProps} />
			</li>
		);
	});

	return <ul>{list}</ul>;
};

export default TodoList;
