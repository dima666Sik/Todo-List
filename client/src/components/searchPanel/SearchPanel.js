import "./SearchPanel.css";
import ButtonGroup from "../buttonGroup";
import { Component } from "react";

export default class SearchPanel extends Component {
	onSearchTask = (event) => {
		this.props.onSearchTask(event.target.value);
	};

	render() {
		const {
			onShowAll,
			onShowAllDone,
			onShowAllActivity,
			onShowAllActivityImportant,
		} = this.props;

		return (
			<div className="search-panel d-flex">
				<input
					type="text"
					className="form-control search-input"
					placeholder="type to search"
					onChange={this.onSearchTask}
				/>
				<ButtonGroup
					onShowAll={() => {
						onShowAll("all");
					}}
					onShowAllDone={() => {
						onShowAllDone("done");
					}}
					onShowAllActivity={() => {
						onShowAllActivity("active");
					}}
					onShowAllActivityImportant={() => {
						onShowAllActivityImportant("important");
					}}
				/>
			</div>
		);
	}
}
