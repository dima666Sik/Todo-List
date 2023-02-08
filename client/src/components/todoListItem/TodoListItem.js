import { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
	render() {
		const {
			label,
			onDeleted,
			onToggleImportant,
			onToggleDone,
			done,
			important,
		} = this.props;

		let classNameSpanLabels = `todo-list-item d-flex`;

		if (done) {
			classNameSpanLabels += " done";
		}

		if (important) {
			classNameSpanLabels += " important";
		}

		return (
			<span className={classNameSpanLabels}>
				<span className="todo-list-item-label" onClick={onToggleDone}>
					{label}
				</span>

				<div className="gap-2 d-flex">
					<button
						type="button"
						className="btn btn-outline-success btn-sm"
						onClick={onToggleImportant}
					>
						<i className="fa fa-exclamation" />
					</button>

					<button
						type="button"
						className="btn btn-outline-danger btn-sm"
						onClick={onDeleted}
					>
						<i className="fa fa-trash-o" />
					</button>
				</div>
			</span>
		);
	}
}
