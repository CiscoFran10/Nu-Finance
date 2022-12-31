import React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const StyledHome = styled.main`
	display: grid;
	place-items: center;
	height: 100%;
	background-color: var(--grey-4);

	.container {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 60px;
	}

	.intro {
		display: grid;
		gap: 28px;
		color: #fff;

		h1 {
			font-weight: 700;
			max-width: 15ch;
			font-size: var(--title-1);
		}

		p {
			font-size: var(--headline);
		}

		button {
			width: 70%;
			justify-self: flex-start;
		}
	}

	@media (max-width: 600px) {
		.intro h1 {
			font-size: var(--title-2);
		}
	}

	@media (max-width: 500px) {
		.container {
			grid-template-columns: 1fr;
			margin: 60px 0px;
			gap: 0px;
		}

		.intro h1 {
			max-width: 25ch;
			font-size: var(--title-2);
		}

		.intro-image {
			display: none;
		}
	}
`;

const Home = ({ setIsloggedIn }) => {
	return (
		<StyledHome>
			<div className="container">
				<div className="intro">
					<h1>Nu Finance</h1>
					<h2>Centralize o controle das suas finanças</h2>
					<p>de forma rápida e segura</p>
					<Button callback={() => setIsloggedIn(true)}>Iniciar</Button>
				</div>

				<div className="intro-image">
					<img
						src="/assets/illustration.svg"
						alt="Todo list illustration"
					/>
				</div>
			</div>
		</StyledHome>
	);
};

export default Home;
