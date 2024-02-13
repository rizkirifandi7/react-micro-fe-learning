import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Content from "./components/Content";

const App = () => {
	return (
		<div className="mt-10">
			<Content />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("app"));

