import React from "react";
import styled from "styled-components";
const Title = styled.h1`
	color: ${(prop) => prop.theme.accentColor};
	font-size: 2em;
`
const Coins = () => {
	return (

			<Title>coins</Title>

	);
};

export default Coins;
