import "./SearchPanel.css";
import ButtonGroup from "../buttonGroup";
import { Component } from "react";

export default class SearchPanel extends Component {
	render() {
		return (
			<div className="search-panel d-flex">
				<input
					type="text"
					className="form-control search-input"
					placeholder="type to search"
				/>
				<ButtonGroup />
			</div>
		);
	}
}
