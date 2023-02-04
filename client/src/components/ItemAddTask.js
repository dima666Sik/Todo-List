import "../style/ItemAddTask.css";

const ItemAddTask = () => {
	return (
		<div className="bottom-panel d-flex">
			<input
				type="text"
				className="form-control new-todo-label"
				placeholder="What the task you want to add?"
			/>

			<button type="submit" className="btn btn-outline-secondary">
				Add
			</button>
		</div>
	);
};

export default ItemAddTask;
