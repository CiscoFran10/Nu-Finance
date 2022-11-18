import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

html,
body {
	height: 100%;
}

:root {
	--color-primary: #fd377e;
	--color-primary-2: #e34981;
	--color-secondary: #03b898;
	--grey-1: #f8f9fa;
	--grey-2: #e9ecef;
	--grey-3: #868e96;
	--grey-4: #212529;
	--grey-5: #343A40;

	--title-1: 2.375rem;
	--title-2: 1.5rem;
	--title-3: 1.3rem;
	--title-4: 0.75rem;
	--headline: 1rem;
}

#root {
	font-family: "Nunito", Inter, Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
	height: 100vh;
	font-size: 0.75rem;
	font-weight: 400;
	background-color: #ffffff;
	color: var(--grey-4);
}

a {
	display: block;
	text-decoration: none;
}

h1,
h2,
h3,
p {
	padding: 0;
	margin: 0;
}

ul ,li{
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	object-fit: cover;
}

input,
button,
textarea,
select {
  font: inherit;
}

.container {
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 20px;
}

/* @media (prefers-color-scheme: dark) {
	#root {
		color: #ffffff;
		background-color: #090909;
	} 
} */
`;
