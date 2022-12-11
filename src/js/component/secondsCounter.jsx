import React, {useState, useEffect} from "react";

//create your first component
const Secondsseconds = () => {

	//Set variables
	let [seconds, setSeconds] = React.useState(0);

	React.useEffect(() => {
		setTimeout(() => setSeconds(seconds + 1), 1000)
	}, [seconds]);

	//functions

	const zfill = (number, width) => {
		var numberOutput = Math.abs(number); /* Valor absoluto del número */
		var length = number.toString().length; /* Largo del número */ 
		var zero = "0"; /* String de cero */  
		
		if (width <= length) {
			if (number < 0) {
				 return ("-" + numberOutput.toString()); 
			}
			else {
				 return numberOutput.toString(); 
			}
		}
		else {
			if (number < 0) {
				return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
			}
			else if (number.toString().length===0){
				return ((zero.repeat(width-1)) + numberOutput.toString());
			}
			else {
				return ((zero.repeat(width - length)) + numberOutput.toString()); 
			}
		}
	}

	const counterFormat = (aux) => {
		aux = zfill(seconds, 6).toString().split('');
		return aux;
	}

	const counterMap = counterFormat(seconds).map((counter) => {
		return <h1 className="counter-number">{counter}</h1>;
	})

	const handleCounterChange = (event) => {
		if(Math.abs(event.target.value).toString().length <= 6){
			setSeconds(event.target.value);
		}
		else{
			setSeconds(999999)
			alert("You can't type a number greater than 999999.")
		}
	}

	const resetSeconds = () => {
		setSeconds(seconds=0);
	}

	return (
		<div className="container-fluid p-0">
			<div className="position-absolute top-50 start-50 translate-middle">
				<div className="counter-flex">
					<h1 className="counter-number clock"><i className="fa-regular fa-clock"></i></h1>
					{counterMap}
				</div>
				<div className="d-flex flex-row justify-content-center gap-2 mt-3">
					<button onClick={resetSeconds} type="button" className="btn btn-light">Reset</button>
				</div>
			</div>
		</div>
	);
};

export default Secondsseconds;
