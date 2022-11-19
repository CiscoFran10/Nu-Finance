import React from "react";
import styled from "styled-components";
import { useState } from "react";

import Input from "./Input";
import SelectInput from "./Select";
import Button from "../Button";
import TotalMoney from "../TotalMoney";

const StyledFormSection = styled.section`
	width: 60%;
	form {
		width: 100%;
		padding: 38px 24px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		border: 2px solid var(--grey-2);

		label {
			font-size: 0.875rem /* 14px -> .875rem */;
			width: 100%;
			display: block;
		}

		label + label {
			margin: 2rem 0;
		}

		.flex {
			display: flex;
			align-items: center;
			gap: 36px;
		}

		span {
			color: var(--grey-3);
		}

		@media (max-width: 1000px) {
			.flex {
				flex-direction: column;
				gap: 0px;
				margin: 12px 0;
			}

			label + label {
				margin: 0;
			}
		}
	}
`;

const Form = ({ data, setData }) => {
	const [input, setInput] = useState({
		description: "",
		type: "Entrada",
		value: "",
	});

	const handleChange = ({ target }) => {
		const { id, value } = target;
		setInput({ ...input, [id]: value });
	};

	function handleSubmit(event) {
		event.preventDefault();
		setData([...data, input]);
		setInput({ description: "", type: "Entrada", value: "" });
	}

	return (
		<StyledFormSection>
			<form onSubmit={handleSubmit}>
				<label>
					Descrição
					<Input
						id="description"
						placeholder="Digite aqui sua descrição"
						input={input}
						handleChange={handleChange}
					/>
				</label>

				<span>Ex: Compra de roupas</span>

				<div className="flex">
					<label>
						Valor
						<Input
							id="value"
							type="number"
							placeholder="R$"
							input={input}
							handleChange={handleChange}
						/>
					</label>

					<label>
						Tipo de valor
						<SelectInput input={input} handleChange={handleChange} />
					</label>
				</div>
				<Button>Inserir valor</Button>
			</form>
			<TotalMoney data={data} />
		</StyledFormSection>
	);
};

export default Form;
