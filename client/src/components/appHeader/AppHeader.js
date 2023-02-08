import "./AppHeader.css";
import { Component } from "react";

export default class AppHeader extends Component {
	render() {
		const { toDo, done, importantTask } = this.props;

		return (
			<div className="app-header d-flex">
				<h1>Todo List</h1>
				<h2>
					{toDo} more to do, {done} done, {importantTask} important
				</h2>
			</div>
		);
	}
}
