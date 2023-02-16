import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Loader = styled.div`
	text-align:center;
`

const Container = styled.div`
	padding: 0 20px;
	max-width: 480px;
	margin: 0 auto;
	
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
	color:${(prop) => prop.theme.cardColor};
	background: ${(prop) => prop.theme.bgCardColor};
	a{ display: flex; align-items: center; justify-content:space-between; width:100%; padding: 16px 20px; color:inherit; text-decoration: none;
		transition: color .25s ease-in-out;
		small{font-size: 0.75em; color:${(prop) => prop.theme.smallColor};}
		&:hover{color: ${prop => prop.theme.accentColor} }
	}
`
const CoinWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
const Icon = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 7px;
`

/*const coins = [
	{
		id : "Bit-boin",
		name: "BitCoin",
		symbol : "BTC",
		rank: 1,
		is_new: false ,
		is_active: true,
		type: "coin"
	},
	{
		id : "eth-ethereum",
		name: "Ethereum",
		symbol : "ETH",
		rank: 2,
		is_new: false ,
		is_active: true,
		type: "coin"
	},
	{
		id : "hex-hex",
		name: "HEX",
		symbol : "HEX",
		rank: 3,
		is_new: false ,
		is_active: true,
		type: "token"
	},
]*/
interface CoinInterface {
	id : string,
	name: string,
	symbol : string,
	rank: number,
	is_new: boolean ,
	is_active: boolean,
	type: string
}

const Coins = () => {
	const [coins, setCoins] = useState<CoinInterface[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect( () => {
		// 앱 시작시에 한번만 즉시 실행 ( function )();
		( 	async () =>
			{ 	const response = await fetch ("https://api.coinpaprika.com/v1/coins");
				const json = await response.json();
				setCoins(json.slice(0,100));
				console.log(coins);
				setLoading(false);
			}
		)();
	}, []);
	return (
		<Container>
			<Header><Title>coins</Title></Header>
			{ loading ? <Loader>Loading...</Loader> : (
				<CoinList >
					{coins.map ( coin =>
						<Coin key={coin.id}>
{/*							<Link to={ `/${coin.id}`}*/}
							<Link
								to = {{pathname: `/${coin.id}`}}
								state = {{name : coin.name}} // 이렇게 하면 유저는 전환시에 아무것도 보지 않을 수 있다.
							>
								<CoinWrapper>
								<Icon src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.name} />
								{coin.name}
								</CoinWrapper>
								<small>{coin.symbol} 〉〉</small>
							</Link>
						</Coin>
					)}
				</CoinList>
				)
			}
		</Container>
	);
};

export default Coins;
