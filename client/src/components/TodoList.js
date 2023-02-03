import TodoListItem from "./TodoListItem";

const TodoList = () => {
	return (
		<div>
			<ul>
				<li>
					<TodoListItem />
				</li>
				<li>
					<TodoListItem />
				</li>
			</ul>
		</div>
	);
};

export default TodoList;
