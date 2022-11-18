import React from "react";
import styled from "styled-components";

import Card from "./Card";
import Button from "../Button";
import { useState } from "react";

const StyledList = styled.section`
	width: 100%;

	.list-header {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: space-between;
		padding-right: 10px;

		h2 {
			font-size: var(--title-3);
			font-weight: 700;
		}

		ul {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	}

	.list-body {
		margin-top: 1.625rem;
		height: 530px;
		padding-right: 10px;
		overflow-y: auto;
		overflow-x: hidden;

		h2 {
			margin-top: 10px;
			font-size: var(--title-2);
			font-weight: 700;
			color: var(--grey-5);
		}

		img {
			margin-top: 30px;
			width: 100%;
		}
	}

	@media (max-width: 1000px) {
		.list-body h2 {
			font-size: var(--title-3);
		}

		.list-header {
			flex-wrap: wrap;

			nav {
				padding-bottom: 15px;
				overflow-x: auto;
			}
		}
	}

	@media (max-width: 760px) {
		.list-body {
			height: 100%;
			margin-bottom: 40px;
		}
	}
`;

const List = ({ data, setData }) => {
	const [list, setList] = useState(null);
	const [active, setActive] = useState("Todos");

	React.useEffect(() => {
		setList(data);
		setActive("Todos");
	}, [data]);

	const handleTabNav = ({ target }) => {
		const normalizeTarget = target.innerText.slice(0, -1);
		setActive(target.innerText);

		if (target.innerText === "Todos") {
			setList(data);
		} else {
			const FilteredList = data.filter((item) => item.type === normalizeTarget);
			setList(FilteredList);
		}
	};

	const handleDelete = (index) => {
		const filteredList = data.filter((item) => data.indexOf(item) !== index);
		setData(filteredList);
	};

	return (
		<StyledList>
			<div className="list-header">
				<h2>Resumo financeiro</h2>
				<nav>
					<ul>
						<li>
							<Button active={active} className="grey" callback={handleTabNav}>
								Todos
							</Button>
						</li>
						<li>
							<Button active={active} className="grey" callback={handleTabNav}>
								Entradas
							</Button>
						</li>
						<li>
							<Button active={active} className="grey" callback={handleTabNav}>
								Despesas
							</Button>
						</li>
					</ul>
				</nav>
			</div>

			<ul className="list-body">
				{list && list.length > 0 ? (
					list.map((item, index) => (
						<Card
							key={index}
							index={index}
							handleDelete={handleDelete}
							item={item}
						/>
					))
				) : (
					<>
						<h2>Você ainda não possui nenhum lançamento</h2>
						<img src="/src/assets/NoCard.svg" alt="no card" />
						<img src="/src/assets/NoCard.svg" alt="no card" />
						<img src="/src/assets/NoCard.svg" alt="no card" />
					</>
				)}
			</ul>
		</StyledList>
	);
};

export default List;
