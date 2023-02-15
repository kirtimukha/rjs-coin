import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
	padding: 0 20px;
`
const Title = styled.h1`
	
	font-size: 2em;
	color: ${(prop) => prop.theme.accentColor};
`
const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10vh;
	margin-top:15px;
	margin-bottom:15px;
`

const CoinList =styled.ul`
	
`
const Coin = styled.li`
	display: flex;
	align-items: center;


	margin-bottom: 15px;
	border-radius: 15px;
	line-height: 1.5;
	color:${(prop) => prop.theme.cardColor};
	background: ${(prop) => prop.theme.bgCardColor};
	a{ display: flex; align-items: center; justify-content:space-between; width:100%;height: 100%;  padding: 16px 20px; color:inherit; text-decoration: none;
		transition: color .25s ease-in-out;
		small{font-size: 0.75em; color:${(prop) => prop.theme.smallColor};}
		&:hover{color: ${prop => prop.theme.accentColor} }
	}
`
const coins = [
	{
		id : "Bit-boin",
		name: "BitCoin",
		symbol : "BTC",
		rank: 1,
		is_new: false ,
		is_actibe: true,
		type: "coin"
	},
	{
		id : "eth-ethereum",
		name: "Ethereum",
		symbol : "ETH",
		rank: 2,
		is_new: false ,
		is_actibe: true,
		type: "coin"
	},
	{
		id : "hex-hex",
		name: "HEX",
		symbol : "HEX",
		rank: 3,
		is_new: false ,
		is_actibe: true,
		type: "token"
	},
]
const Coins = () => {
	return (
<Container>
	<Header><Title>coins</Title></Header>
	<CoinList >
		{coins.map ( coin =>
			<Coin key={coin.id}>
				<Link to={`/${coin.id}`}>
					[ {coin.rank} ]	{coin.name} <small>{coin.symbol} 〉〉</small>
				</Link>
			</Coin> )}
	</CoinList>
</Container>


	);
};

export default Coins;
