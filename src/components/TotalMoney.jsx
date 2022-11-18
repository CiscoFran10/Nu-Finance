import React from "react";
import styled from "styled-components";

const StyledTotal = styled.div`
	padding: 38px 24px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 6px;

	border: 2px solid var(--grey-2);

	.total-header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h2 {
			font-size: var(--title-3);
			font-weight: 700;
		}

		span {
			font-size: var(--title-3);
			font-weight: 700;
			color: var(--color-primary);
		}

		p {
			color: var(--grey-3);
		}
	}
`;

const TotalMoney = ({ data }) => {
	const entries = data
		.filter((item) => item.type === "Entrada")
		.reduce((a, b) => a + +b.value, 0);

	const expenses = data
		.filter((item) => item.type === "Despesa")
		.reduce((a, b) => a + +b.value, 0);

	const total = entries - expenses;
	return (
		<StyledTotal>
			<div className="total-header">
				<h2>Valor Total:</h2>
				<span>$ {total}</span>
			</div>
			<p>O valor se refere ao saldo</p>
		</StyledTotal>
	);
};

export default TotalMoney;
