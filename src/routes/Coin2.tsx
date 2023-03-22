import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import styled from "styled-components";
import {Link, Route, useLocation} from "react-router-dom";


const Container = styled.div`
	padding: 0 20px;
	max-width: 480px;
	margin: 0 auto;
	
`
const Loader = styled.div`
	text-align:center;
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


interface ILocation {
	state :{
		name: string
		rank: number
	}
}
interface CoinInterface {
	id : string,
	name: string,
	symbol : string,
	rank: number,
	is_new: boolean ,
	is_active: boolean,
	type: string
}
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  //background-color: rgba(0, 0, 0, 0.5);
  background-color: ${props=>props.theme.bgCardColor};    
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
	margin: 20px 0;
`

interface Itag{
	coin_counter : number;
	ico_counter: number;
	id: string;
	name : string;
}
interface IInfoData {
	//속성 뽑기 : Object.keys(temp1).join()
	//타입 뽑기 : Object.values(temp1).map(v=>typeof v).join()
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
	logo: string;
	tags: Itag[]; //object 이라고 나오지만 실제로는 어레이임
	description: string;
	message: string;
	open_source: boolean;
	started_at: string;
	development_status: string;
	hardware_wallet: boolean;
	proof_type: string;
	org_structure: string;
	hash_algorithm: string;
	first_data_at: string;
	last_data_at: string;
}
interface IPriceData{
	id: string;
	name: string;
	symbol: string;
	rank: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	beta_value: number;
	first_data_at: string;
	last_updated: string;
	quotes: {
		USD: {
			ath_date: string;
			ath_price: number;
			market_cap: number;
			market_cap_change_24h: number;
			percent_change_1h: number;
			percent_change_1y: number;
			percent_change_6h: number;
			percent_change_7d: number;
			percent_change_12h: number;
			percent_change_15m: number;
			percent_change_24h: number;
			percent_change_30d: number;
			percent_change_30m: number;
			percent_from_price_ath: number;
			price: number;
			volume_24h: number;
			volume_24h_change_24h: number;
		}
	}
}
const Coin2 = () => {
	const [ loading, setLoading ] = useState(true);
	const {coinId} = useParams<{coinId:string}>();
	const {state} = useLocation() as ILocation;
	const [info, setInfo] = useState<IInfoData>();//objects
	const [priceInfo, setPriceInfo] = useState<IPriceData>();


	// useEffect (() => {}, []);
	useEffect (() => {
		// 앱 시작시에 한번만 즉시 실행 ( function )();
		( 	async () =>
			{
				const infoData =  await(await fetch (`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
				const priceData = await ( await fetch ( `https://api.coinpaprika.com/v1/tickers/${coinId}`) ).json()
				console.log(infoData);
				console.log(priceData);
				setInfo(infoData);
				setPriceInfo(priceData);
				setLoading(false);
			}
		)();
	}, [coinId]);
	return (
		<Container>
			{/*//이전 페이지로부터 클릭한 것이 아니라, state로부터 얻어온 이름이라고 해도 열리도록 함*/}
			<Header><Title>{state ?.name ? state.name : loading ? "Loading...": info?.name}  </Title></Header>
			{ loading ? <Loader>Loading...</Loader> :
				(
					<>
						<Overview>
							<OverviewItem>
								<span>Rank:</span>
								<span>{info?.rank}</span>
							</OverviewItem>
							<OverviewItem>
								<span>symbol:</span>
								<span>{info?.symbol}</span>
							</OverviewItem>

							<OverviewItem>
								<span>price:</span>
								<span>{priceInfo?.quotes?.USD?.price}</span>
							</OverviewItem>
							<OverviewItem>
								<span>open_source:</span>
								<span>{info?.open_source? "Y": "N"}</span>
							</OverviewItem>
						</Overview>
						<Description>{info?.description}</Description>
						<Overview>

							<OverviewItem>
								<span>Total Supply:</span>
								<span>{priceInfo?.total_supply}</span>
							</OverviewItem>

							<OverviewItem>
								<span>Max Supply:</span>
								<span>{priceInfo?.max_supply}</span>
							</OverviewItem>
						</Overview>

					{/*	<Switch>
							<Route path={`/${coinId}/price`}>
								<Price />
							</Route>
						<Route path={`/${coinId}/chart`}>
								<Chart />
							</Route>
						</Switch>*/}
					</>
				)
			}
		</Container>
	)
};

export default Coin2;
