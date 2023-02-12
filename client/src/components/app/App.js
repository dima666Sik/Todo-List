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
		filter: "all",
		search: "",
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

	countValuesIntoTasksDone() {
		return this.state.todoList
			.map((task) => task.done)
			.reduce((prev, curr) => (curr ? ++prev : prev), 0);
	}

	countValuesIntoTasksActivityImportant() {
		return this.state.todoList
			.map((task) => !task.done && task.important)
			.reduce((prev, curr) => (curr ? ++prev : prev), 0);
	}

	countToDoTasks() {
		return this.state.todoList.length - this.countValuesIntoTasksDone();
	}

	filterItems(tasks, filter) {
		console.log("filterItems " + filter);
		if (filter === "all") {
			return tasks;
		} else if (filter === "active") {
			return tasks.filter((task) => !task.done);
		} else if (filter === "done") {
			return tasks.filter((task) => task.done);
		} else if (filter === "important") {
			return tasks.filter((task) => !task.done && task.important);
		}
	}

	onSearchTask(tasks, search) {
		console.log("onSearchTask" + search);
		if (search.length === 0) {
			return tasks;
		}

		return tasks.filter((task) => {
			return task.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
		});
	}

	searchSeekTask(array, text) {
		return array.filter((el) => el.label.includes(text));
	}

	onFilterChange = (filter) => {
		console.log(filter);
		this.setState({ filter });
	};

	onSearchChange = (search) => {
		console.log(search);
		this.setState({ search });
	};

	onShowAll = () => {};

	render() {
		const { todoList, filter, search } = this.state;

		const visibleItems = this.onSearchTask(
			this.filterItems(todoList, filter),
			search
		);

		return (
			<div className="app-todo-list-container">
				<div className="app-todo-list">
					<AppHeader
						toDo={this.countToDoTasks()}
						done={this.countValuesIntoTasksDone()}
						importantTask={this.countValuesIntoTasksActivityImportant()}
					/>
					<SearchPanel
						onSearchTask={this.onSearchChange}
						onShowAll={this.onFilterChange}
						onShowAllDone={this.onFilterChange}
						onShowAllActivity={this.onFilterChange}
						onShowAllActivityImportant={this.onFilterChange}
					/>
					<TodoList
						todoList={visibleItems}
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
