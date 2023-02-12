import "./ButtonGroup.css";
import { Component } from "react";

export default class ButtonGroup extends Component {
	render() {
		const {
			onShowAll,
			onShowAllDone,
			onShowAllActivity,
			onShowAllActivityImportant,
		} = this.props;

		return (
			<div className="btn-group" role="group">
				<button type="button" className="btn btn-info" onClick={onShowAll}>
					All
				</button>
				<button
					type="button"
					className="btn btn-outline-secondary btn-light"
					onClick={onShowAllActivity}
				>
					Active
				</button>
				<button
					type="button"
					className="btn btn-outline-secondary btn-light"
					onClick={onShowAllActivityImportant}
				>
					Active Important
				</button>
				<button
					type="button"
					className="btn btn-outline-secondary btn-light"
					onClick={onShowAllDone}
				>
					Done
				</button>
			</div>
		);
	}
}
