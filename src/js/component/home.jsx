import React, { useState } from "react";

const Home = () => {
	const [input, setInput] = useState("");
	const [arrTodo, setArrTodo] = useState([]);
	const [deleteShown, setDeleteShown] = useState(false);

	return (
		<div className="container">
			<div className="mb-3 w-75 mx-auto">
				<label htmlFor="exampleInputEmail1" className="form-label">
					<h2 className="h2">Todos</h2>
				</label>
				<div >
				<form  onSubmit = {evento => {
					evento.preventDefault();
					if (input.length > 0)
						setArrTodo([...arrTodo, input]);
					setInput("");
				}}>
            
          <input
						type="text"
						className="form-control"
						value={input}
						placeholder="What needs to be done?"
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
        </form>
				</div>
				{arrTodo.map((e, i) => {
					return (
						<div
							className="form-control"
							key={i}
							onMouseEnter={() => setDeleteShown(i)}
							onMouseLeave={() => setDeleteShown(null)}>
							{e}{" "}
							{deleteShown == i && (
								<button
									type="button"
									className="btn-close btn-close-danger"
									aria-label="Close"
									onClick={() => {
										setArrTodo(
											arrTodo.filter(
												(v, index) => index !== i
											)
										);
									}}></button>
							)}
						</div>
					);
				})}
				<div>
					<footer>
						{arrTodo.length > 0
							? arrTodo.length + " items left"
							: ""}
					</footer>
				</div>
			</div>
		</div>
	);
};

export default Home;