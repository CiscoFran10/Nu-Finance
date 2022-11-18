import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledCard = styled.li`
	display: grid;
	grid-template-columns: 1fr auto auto;
	gap: 30px;
	align-items: center;
	margin-bottom: 32px;
	background: var(--grey-1);
	border-radius: 8px;
	padding: 18px;
	border-left: 4px solid transparent;
	border-color: ${({ entrada }) =>
		entrada === "Entrada" ? "var(--color-secondary)" : "var(--color-primary)"};
	animation: slide 0.5s ease;

	h3 {
		font-size: var(--title-3);
		font-weight: 700;
		flex: 1;
	}

	span {
		font-size: var(--headline);
		color: ${({ entrada }) =>
			entrada === "Entrada" ? "var(--grey-4)" : "var(--color-primary)"};
	}

	p {
		font-size: var(--headline);
		color: var(--grey-5);
	}

	@keyframes slide {
		from {
			opacity: 0;
			transform: translateX(200px);
			filter: blur(2px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
			filter: blur(0);
		}
	}

	@media (max-width: 500px) {
		gap: 15px;

		h3 {
			font-size: var(--headline);
		}
		span {
			grid-column: 1;
		}

		button {
			grid-row: 1;
			grid-column: 2;
		}

		p {
			grid-column: 1;
		}
	}
`;

const Card = ({ item, handleDelete, index }) => {
	const { description, type, value } = item;

	const normalizeDescription =
		description.charAt(0).toUpperCase() + description.slice(1);
	const normalizeValue = parseInt(value).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	return (
		<StyledCard entrada={type}>
			<h3>{normalizeDescription}</h3>
			<span>{normalizeValue}</span>
			<Button callback={() => handleDelete(index)} className="grey img" />
			<p>{type}</p>
		</StyledCard>
	);
};

export default Card;
