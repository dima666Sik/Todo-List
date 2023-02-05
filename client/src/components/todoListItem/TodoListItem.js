import { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
	state = {
		done: false,
	};

	onLabelClick = () => {
		if (!this.state.done) {
			this.setState({ done: true });
		} else {
			this.setState({ done: false });
		}
	};

	render() {
		const { label, important = false } = this.props;
		let classNameSpanLabels = `todo-list-item d-flex`;
		const { done } = this.state;

		if (done) {
			classNameSpanLabels += " done";
		}

		const styleSpan = {
			color: important ? "red" : "black",
		};

		return (
			<span className={classNameSpanLabels}>
				<span
					style={styleSpan}
					className="todo-list-item-label"
					onClick={this.onLabelClick}
				>
					{label}
				</span>

				<div className="gap-2 d-flex">
					<button type="button" className="btn btn-outline-success btn-sm">
						<i className="fa fa-exclamation" />
					</button>

					<button type="button" className="btn btn-outline-danger btn-sm">
						<i className="fa fa-trash-o" />
					</button>
				</div>
			</span>
		);
	}
}
