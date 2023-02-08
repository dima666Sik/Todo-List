import "./App.css";
import AppHeader from "../appHeader";
import ItemAddTask from "../itemAddTask";
import SearchPanel from "../searchPanel";
import TodoList from "../todoList";
import { Component } from "react";

export default class App extends Component {
	minId = 0;

	state = {
		todoList: [
			this.onCreateItem("First task"),
			this.onCreateItem("Second task"),
			this.onCreateItem("Third task"),
			this.onCreateItem("Forth task"),
			this.onCreateItem("Fifth task"),
			this.onCreateItem("Sixth task"),
		],
	};

	onCreateItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: ++this.minId,
		};
	}

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
			const newArrayWithAddItem = [...todoList, this.onCreateItem(text)];
			return {
				todoList: newArrayWithAddItem,
			};
		});
	};

	onToggleUpdateProps(array, id, prop) {
		const index = array.findIndex((element) => element.id === id);
		const oldItem = array[index];
		const updateItem = { ...oldItem, [prop]: !oldItem[prop] };

		return [...array.slice(0, index), updateItem, ...array.slice(index + 1)];
	}

	onToggleImportant = (id) => {
		console.log("Toggle important");
		this.setState(({ todoList }) => {
			return {
				todoList: this.onToggleUpdateProps(todoList, id, "important"),
			};
		});
	};

	onToggleDone = (id) => {
		console.log("Toggle done");
		this.setState(({ todoList }) => {
			return {
				todoList: this.onToggleUpdateProps(todoList, id, "done"),
			};
		});
	};

	countValuesIntoTasks(prop) {
		return this.state.todoList
			.map((task) => task[prop])
			.reduce((prev, curr) => (curr ? ++prev : prev), 0);
	}

	countToDoTasks() {
		return this.state.todoList.length - this.countValuesIntoTasks("done");
	}

	render() {
		return (
			<div className="app-todo-list-container">
				<div className="app-todo-list">
					<AppHeader
						toDo={this.countToDoTasks()}
						done={this.countValuesIntoTasks("done")}
						importantTask={this.countValuesIntoTasks("important")}
					/>
					<SearchPanel />
					<TodoList
						todoList={this.state.todoList}
						onDeleted={this.onDeleteItem}
						onToggleImportant={this.onToggleImportant}
						onToggleDone={this.onToggleDone}
					/>
					<ItemAddTask onAdded={this.onAdd} />
				</div>
			</div>
		);
	}
}
