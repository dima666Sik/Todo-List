import "./App.css";
import AppHeader from "../appHeader";
import ItemAddTask from "../itemAddTask";
import SearchPanel from "../searchPanel";
import TodoList from "../todoList";
import { Component } from "react";

export default class App extends Component {
	render() {
		const todoList = [
			{ label: "First task", important: false, id: 1 },
			{ label: "Second task", important: false, id: 2 },
			{ label: "Third task", important: true, id: 3 },
			{ label: "Forth task", important: false, id: 4 },
			{ label: "Fifth task", important: false, id: 5 },
			{ label: "Sixth task", important: false, id: 6 },
			{ label: "Seventh task", important: false, id: 7 },
			{ label: "Eighth task", important: false, id: 8 },
		];
		return (
			<div className="app-todo-list">
				<AppHeader toDo={3} done={5} />
				<SearchPanel />
				<TodoList todoList={todoList} />
				<ItemAddTask />
			</div>
		);
	}
}
