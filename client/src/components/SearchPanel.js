import "../style/SearchPanel.css";
import ButtonGroup from "./ButtonGroup";

const SearchPanel = () => {
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
};

export default SearchPanel;
