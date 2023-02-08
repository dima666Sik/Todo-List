import { Component } from "react";
import "./ItemAddTask.css";

export default class ItemAddTask extends Component {
	render() {
		const { onAdded } = this.props;

		return (
			<div className="bottom-panel d-flex">
				<input
					type="text"
					className="form-control new-todo-label"
					placeholder="What the task you want to add?"
				/>

				<button
					type="submit"
					className="btn btn-outline-secondary btn-light"
					onClick={() => onAdded("hi")}
				>
					Add
				</button>
			</div>
		);
	}
}
