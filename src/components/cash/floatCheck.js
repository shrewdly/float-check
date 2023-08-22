"use client";

import { zeroFloatValues } from "./dataArrays";
import { useState, useEffect } from "react";

import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";

const FloatCheck = () => {
	const [checkFloat, setCheckFloat] = useState(zeroFloatValues);
	const [floatTotal, setFloatTotal] = useState(0.0);

	let total = 0;
	useEffect(() => {
		checkFloat.map((item) => {
			total += item.amount;
			setFloatTotal(total);
		});
	}, [checkFloat]);

	const updateFloat = (e) => {
		const result = setCheckFloat(
			checkFloat.map((item) => {
				if (item.denom === e.target.name) {
					console.log("E", item.denom, e.target.value);

					return { ...item, amount: e.target.value };
				}
				return item;
			})
		);
	};

	return (
		<div className="">
			<div>FloatCheck</div>
			<div className="grid grid-cols-2 w-[300px]  ">
				<div className="col-span-1 grid grid-cols-1 w-[150px]  divide-solid divide-y-2 text-sm">
					<p>Value</p>
				</div>
				<div className="col-span-1 grid grid-cols-1 w-[150px]  divide-solid divide-y-2 text-sm ">
					<p>Amount</p>
				</div>
				{checkFloat.map((item, index) => (
					<div
						className="col-span-2 grid grid-cols-2 w-[150px]  divide-solid divide-y-2 "
						key={index}
					>
						<div className="col-span-1 grid grid-cols-1 w-[100px]  divide-solid divide-y-2 text-sm p-2">
							<p>{item.denom}</p>
						</div>
						<div className="col-span-1 grid grid-cols-1 w-[200px]  ">
							<NumericTextBoxComponent
								type="number"
								placeholder={item.denom}
								name={item.denom}
								decimals={2}
								step={item.step}
								id={item.denom}
								value={item.amount}
								onChange={(e) => {
									updateFloat(e);
								}}
							/>
						</div>
					</div>
				))}
				<br />

				<div className="col-span-2 grid grid-cols-2 w-[150px]  divide-solid divide-y-2 ">
					<div className="col-span-1 grid grid-cols-1 w-[100px]  divide-solid divide-y-2 text-sm p-2">
						<p>Total</p>
					</div>
					<div className="col-span-1 grid grid-cols-1 w-[200px] text-sm text-right">
						<p className="pr-[95px] pt-[5px] text-sm">
							{floatTotal.toFixed(2)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FloatCheck;

{
	/* <p>Tito</p>;
<td>
							{initialState.map((item) => (
								<p>{item.amount}</p>
							))}
						 <input
								type="number"
								step="0.01"
								min="0"
								max="20000"
								className="form-control"
								// value={state.value}
								onChange={(e) => onValueChange("value", e.target.value)}
							/>
						</td> */
}
