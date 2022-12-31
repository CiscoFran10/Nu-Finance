import { useState } from "react";
import { GlobalStyles } from "./globalStyles";

import Form from "./components/Form/Form";
import Header from "./components/Header";
import styled from "styled-components";
import List from "./components/List/List";
import Home from "./Home";

const StyledDashboard = styled.main`
	display: flex;
	gap: 0 60px;
	margin-top: 2.5rem;
	animation: show 0.6s ease forwards;

	@media (max-width: 800px) {
		gap: 0 30px;
	}

	@media (max-width: 760px) {
		gap: 60px 0;
		flex-direction: column;

		section {
			width: 100%;
		}
	}

	@keyframes show {
		from {
			opacity: 0;
			transform: translateY(-40px);
			filter: blur(4px);
		}
		to {
			opacity: 1;
			filter: blur(0);
			transform: translateY(0px);
		}
	}
`;

function App() {
	const [data, setData] = useState(
		JSON.parse(localStorage.getItem("List")) || []
	);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<>
			<GlobalStyles />
			{isLoggedIn ? (
				<>
					<Header setIsLoggedIn={setIsLoggedIn} />
					<div className="container">
						<StyledDashboard>
							<Form data={data} setData={setData} />
							<List data={data} setData={setData} />
						</StyledDashboard>
					</div>
				</>
			) : (
				<Home setIsloggedIn={setIsLoggedIn} />
			)}
		</>
	);
}

export default App;
