import "./ButtonGroup.css";
import { Component } from "react";

export default class ButtonGroup extends Component {
	render() {
		return (
			<div className="btn-group" role="group" aria-label="Простой пример">
				<button type="button" className="btn btn-info">
					All
				</button>
				<button type="button" className="btn btn-outline-secondary btn-light">
					Active
				</button>
				<button type="button" className="btn btn-outline-secondary btn-light">
					Done
				</button>
			</div>
		);
	}
}
