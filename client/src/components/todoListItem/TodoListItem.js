import { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
	state = {
		done: false,
		important: this.props.important === false ? false : true,
	};

	onLabelClick = () => {
		if (!this.state.done) {
			this.setState({ done: true });
		} else {
			this.setState({ done: false });
		}
	};

	onBtnMarkImportantClick = () => {
		if (!this.state.important) {
			this.setState({ important: true });
		} else {
			this.setState({ important: false });
		}
	};

	render() {
		const { label } = this.props;
		let classNameSpanLabels = `todo-list-item d-flex`;

		const { done } = this.state;
		const { important } = this.state;

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
						onClick={this.onBtnMarkImportantClick}
					>
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
