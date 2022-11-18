import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	display: block;
	width: 100%;
	padding: 0 10px;
	height: 48px;
	margin: 0.5rem 0;
	border-radius: 8px;
	background-color: var(--grey-1);
	font-size: var(--headline);
	color: var(--grey-3);
	transition: 0.3s;
	border: 2px solid transparent;
	position: relative;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&:focus {
		border: 2px solid var(--grey-4);
		color: var(--grey-4);
	}

	&[type="number"]::placeholder {
		text-align: right;
	}
`;

const Input = ({ id, children, input, handleChange, ...props }) => {
	return (
		<StyledInput
			id={id}
			required
			value={input[id]}
			onChange={handleChange}
			{...props}
		/>
	);
};

export default Input;
