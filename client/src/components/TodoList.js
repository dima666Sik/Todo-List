import TodoListItem from "./TodoListItem";
import "../style/TodoList.css";

const TodoList = ({ todoList }) => {
	const list = todoList.map((currentValue) => {
		const { id, ...otherProps } = currentValue;

		return (
			<li key={id} className="list-group-item">
				<TodoListItem {...otherProps} />
			</li>
		);
	});

	return <ul className="list-group todo-list">{list}</ul>;
};

export default TodoList;
