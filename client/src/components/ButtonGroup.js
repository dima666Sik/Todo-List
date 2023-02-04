import "../style/ButtonGroup.css";

const ButtonGroup = () => {
	return (
		<div class="btn-group" role="group" aria-label="Простой пример">
			<button type="button" class="btn btn-info">
				All
			</button>
			<button type="button" class="btn btn-outline-secondary">
				Active
			</button>
			<button type="button" class="btn btn-outline-secondary">
				Done
			</button>
		</div>
	);
};

export default ButtonGroup;
