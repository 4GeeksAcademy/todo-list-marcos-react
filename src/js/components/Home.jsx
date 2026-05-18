import React, { useState } from "react";

const Home = () => {

	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");

	function addTask(e) {

		if (e.key === "Enter") {

			if (inputValue !== "") {

				setTasks([...tasks, inputValue]);
				setInputValue("");
			}
		}
	}

	function deleteTask(index) {

		let newTasks = tasks.filter(function (task, i) {

			return i !== index;
		});

		setTasks(newTasks);
	}

	return (
		<div className="container mt-5 d-flex justify-content-center">

			<div className="bg-white shadow" style={{ width: "600px" }}>

				<h1
					className="text-center"
					style={{
						fontSize: "80px",
						color: "#ead7d7",
						fontWeight: "100"
					}}
				>
					todos
				</h1>

				<input
					type="text"
					className="form-control rounded-0 border-0 border-top border-bottom p-3"
					placeholder="What needs to be done?"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={addTask}
				/>

				<ul className="list-group list-group-flush">

					{tasks.map(function (task, index) {

						return (
							<li
								key={index}
								className="list-group-item d-flex justify-content-between task-item"
							>
								{task}

								<span
									className="delete-button"
									onClick={() => deleteTask(index)}
								>
									x
								</span>
							</li>
						);
					})}
				</ul>

				<div className="p-2 text-muted">
					{tasks.length} items left
				</div>
			</div>

			<style>{`

				.delete-button {
					opacity: 0;
					cursor: pointer;
					color: red;
				}

				.task-item:hover .delete-button {
					opacity: 1;
				}

			`}</style>
		</div>
	);
};

export default Home;