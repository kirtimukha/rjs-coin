import React from "react";
import {useParams} from "react-router";
import styled from "styled-components";

const Title = styled.h1`
	color: ${(prop) => prop.theme.accentColor};
	font-size: 2em;
`
interface RouteParams {
	coinId : string ;
}
const Coin = () => {
	//const { coinId } = useParams<{ coinId: string }>();
	//const { coinId } = useParams< RouteParams["coinId"] >();
	const { coinId } = useParams();
	console.log(coinId);
	return (
			<Title>coin:  {coinId}</Title>
	);
};

export default Coin;
