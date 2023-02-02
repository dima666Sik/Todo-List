const TodoList = () => {
	return (
		<div>
			<ul>
				<li>First task</li>
				<li>Second tack</li>
			</ul>
		</div>
	);
};

const AppHeader = () => {
	return <h1>Todo List</h1>;
};

const SearchPanel = () => {
	return <input placeholder="search" />;
};

export default function App() {
	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	);
}
