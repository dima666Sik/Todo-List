import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {
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
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList todoList={todoList} />
		</div>
	);
};

export default App;
