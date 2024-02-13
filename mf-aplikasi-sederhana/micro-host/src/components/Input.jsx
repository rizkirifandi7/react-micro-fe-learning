import * as React from "react";
import "./style.css";

export default function Input({ onChange }) {
	return (
		<div className="MicroApp">
			<h1 className="font-bold text-2xl p-2">Micro App</h1>
			<input onChange={onChange} type="text" placeholder="Enter your name" />
		</div>
	);
}
