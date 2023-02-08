import "./App.css";
import AppHeader from "../appHeader";
import ItemAddTask from "../itemAddTask";
import SearchPanel from "../searchPanel";
import TodoList from "../todoList";
import { Component } from "react";

export default class App extends Component {
	state = {
		todoList: [
			{ label: "First task", important: false, done: false, id: 1 },
			{ label: "Second task", important: false, done: false, id: 2 },
			{ label: "Third task", important: true, done: false, id: 3 },
			{ label: "Forth task", important: false, done: false, id: 4 },
			{ label: "Fifth task", important: false, done: false, id: 5 },
			{ label: "Sixth task", important: false, done: false, id: 6 },
			{ label: "Seventh task", important: false, done: false, id: 7 },
			{ label: "Eighth task", important: false, done: false, id: 8 },
		],
	};

	onDeleteItem = (id) => {
		this.setState(({ todoList }) => {
			const index = todoList.findIndex((element) => element.id === id);
			const newArrayWithoutMarkItem = [
				...todoList.slice(0, index),
				...todoList.slice(index + 1),
			];
			return {
				todoList: newArrayWithoutMarkItem,
			};
		});
	};

	onAdd = (text) => {
		this.setState(({ todoList }) => {
			let createIdForNewItem = todoList.reduce((prev, cur) => {
				if (prev.b > cur.b) {
					return prev.id;
				}
				return cur.id;
			});

			const newArrayWithAddItem = [
				...todoList,
				{
					label: text,
					important: false,
					done: false,
					id: ++createIdForNewItem,
				},
			];
			return {
				todoList: newArrayWithAddItem,
			};
		});
	};

	render() {
		return (
			<div className="app-todo-list-container">
				<div className="app-todo-list">
					<AppHeader toDo={3} done={5} />
					<SearchPanel />
					<TodoList
						todoList={this.state.todoList}
						onDeleted={this.onDeleteItem}
					/>
					<ItemAddTask onAdded={this.onAdd} />
				</div>
			</div>
		);
	}
}
