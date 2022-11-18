import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
	border-radius: 8px;
	font-family: inherit;
	height: 48px;
	width: 100%;
	margin: 0.5rem 0;
	cursor: pointer;
	outline: none;
	padding: 0 1rem;
	background-color: var(--grey-1);
	font-size: var(--headline);
	color: var(--grey-3);
	transition: 0.3s;
	border: 1px solid transparent;

	&:focus {
		border: 1px solid var(--grey-4);
		color: var(--grey-4);
	}
`;

const SelectInput = ({ input, handleChange }) => {
	return (
		<StyledSelect id="type" value={input.type} onChange={handleChange}>
			<option value="Entrada">Entrada</option>
			<option value="Despesa">Despesa</option>
		</StyledSelect>
	);
};

export default SelectInput;
