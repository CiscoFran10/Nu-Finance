import React from "react";
import styled from "styled-components";

const StyledTotal = styled.div`
	padding: 38px 24px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 6px;
	border: 2px solid var(--grey-2);
	animation: slideTop 0.4s ease;

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

	@keyframes slideTop {
		from {
			opacity: 0;
			filter: blur(4px);
			transform: translateY(-40px);
		}
		to {
			opacity: 1;
			filter: blur(0);
			transform: translateY(0);
		}
	}
`;

const TotalMoney = ({ data }) => {
	if (data.length < 1) {
		return null;
	}

	const entries = data
		.filter((item) => item.type === "Entrada")
		.reduce((a, b) => a + +b.value, 0);

	const expenses = data
		.filter((item) => item.type === "Despesa")
		.reduce((a, b) => a + +b.value, 0);

	const total = entries - expenses;
	return (
		<>
			{data.length > 0 && (
				<StyledTotal>
					<div className="total-header">
						<h2>Valor Total:</h2>
						<span>$ {total}</span>
					</div>
					<p>O valor se refere ao saldo</p>
				</StyledTotal>
			)}
		</>
	);
};

export default TotalMoney;
