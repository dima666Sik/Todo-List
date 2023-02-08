import { Component } from "react";
import "./ItemAddTask.css";

export default class ItemAddTask extends Component {
	state = {
		label: "",
	};

	onLabelChange = (event) => {
		this.setState({ label: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onAdded(this.state.label);
	};

	render() {
		return (
			<form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="form-control new-todo-label"
					placeholder="What the task you want to add?"
					onChange={this.onLabelChange}
				/>

				<button type="submit" className="btn btn-outline-secondary btn-light">
					Add
				</button>
			</form>
		);
	}
}
