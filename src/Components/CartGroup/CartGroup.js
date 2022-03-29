import React, { useState } from "react";
import Card from "../Card/Card";

const CartGroup = () => {
	const [titles, setTitles] = useState("");

	const cellToAction = () => {
		const number = Math.round(Math.random() * 5) + 1;
		setTitles(number);
	};

	return (
		<div>
			<h2>This is Cart Group</h2>
			<br />
			<div className="card-group">
				<Card title={titles}></Card>
				<Card></Card>
				<Card></Card>
			</div>
			<br />
			<button onClick={cellToAction} className="btn btn-secondary">
				Click Here
			</button>
		</div>
	);
};

export default CartGroup;
