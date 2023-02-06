import { Component } from "react";
import TodoListItem from "../todoListItem/TodoListItem";
import "./TodoList.css";

export default class TodoList extends Component {
	render() {
		const { todoList } = this.props;

		const list = todoList.map((currentValue) => {
			const { id, ...otherProps } = currentValue;

			return (
				<li key={id} className="list-group-item">
					<TodoListItem {...otherProps} />
				</li>
			);
		});

		return <ul className="list-group todo-list">{list}</ul>;
	}
}