import * as React from "react";
import Input from "./Input";
import "./style.css";

export default function Content() {
	const [name, setName] = React.useState(null);
	return (
		<div>
			<h3 className="font-bold text-3xl text-center">{name ? <span>Your name is: {name}</span> : null}</h3>
			<Input onChange={(e) => setName(e.target.value)} />
		</div>
	);
}
