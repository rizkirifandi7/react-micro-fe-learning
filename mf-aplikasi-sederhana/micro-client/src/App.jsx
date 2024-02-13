import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Content = lazy(() => import("micro_host/Content"));

const App = () => {
	const [name, setName] = React.useState(null);

	return (
		<div className="App mt-10">
			<h1>This is second app</h1>
			<h2>Micro host app is integrated here</h2>
			{name ? <p>Your name is: {name}</p> : null}
			<div>
				<Suspense fallback={<span>Loading...</span>}>
					<Content onChange={(e) => setName(e.target.value)} />
				</Suspense>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));

