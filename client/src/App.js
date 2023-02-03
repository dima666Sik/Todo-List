import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {
	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	);
};

export default App;
