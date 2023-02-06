import { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
	state = {
		done: this.props.done,
		important: this.props.important,
	};

	onLabelClick = () => {
		this.setState(({ done }) => {
			return { done: !done };
		});
	};

	onMarkImportantTask = () => {
		this.setState(({ important }) => {
			return { important: !important };
		});
	};

	render() {
		const { label, onDeleted } = this.props;
		let classNameSpanLabels = `todo-list-item d-flex`;
		const { done, important } = this.state;

		if (done) {
			classNameSpanLabels += " done";
		}

		if (important) {
			classNameSpanLabels += " important";
		}

		return (
			<span className={classNameSpanLabels}>
				<span className="todo-list-item-label" onClick={this.onLabelClick}>
					{label}
				</span>

				<div className="gap-2 d-flex">
					<button
						type="button"
						className="btn btn-outline-success btn-sm"
						onClick={this.onMarkImportantTask}
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
