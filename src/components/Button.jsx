import styled from "styled-components";

const StyledButton = styled.button`
	cursor: pointer;
	display: block;
	padding: 12px 20px;
	border: none;
	font-size: var(--headline);
	border-radius: 8px;
	color: #fff;
	transition: 0.3s;
	background-color: var(--color-primary);

	&:hover {
		background-color: var(--color-primary-2);
	}

	&.dark {
		background-color: var(--grey-5);

		&:hover {
			background-color: #000;
		}
	}

	&.grey {
		background-color: ${({ active, children }) =>
			active === children ? "var(--color-primary)" : "var(--grey-2)"};
		color: ${({ active, children }) =>
			active === children ? "#fff" : "var(--gray-5)"};

		&.img {
			padding: 20px;
			background: var(--grey-2) url("/public/assets/trash-dark.svg") no-repeat
				center;

			&:hover {
				background: var(--grey-5) url("/public/assets/trash-light.svg")
					no-repeat center;
			}
		}

		&:hover {
			background: var(--grey-5);
			color: #fff;
		}
	}
`;

const Button = ({ active, children, callback, className }) => {
	return (
		<StyledButton active={active} className={className} onClick={callback}>
			{children}
		</StyledButton>
	);
};

export default Button;
