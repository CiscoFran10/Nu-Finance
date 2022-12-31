import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledHeader = styled.header`
	padding: 20px 0;
	background: var(--grey-1);
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const Header = ({ setIsLoggedIn }) => {
	return (
		<StyledHeader>
			<div className="container">
				<h1 className="title"><span>Nu</span> Finance</h1>
				<nav>
					<Button className="grey" callback={() => setIsLoggedIn(false)}>
						Inicio
					</Button>
				</nav>
			</div>
		</StyledHeader>
	);
};

export default Header;
