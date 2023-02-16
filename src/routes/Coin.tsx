import React, {useState} from "react";
import {useParams} from "react-router";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";


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

const Coin = () => {


	const [ loading, setLoading ] = useState(true);
	const {coinId} = useParams<{coinId:string}>();
	const {state} = useLocation() as ILocation;
	//const location = useLocation();
	//const name = location.state as LocationState;
	console.log(state);

	return (
		<Container>
			<Header><Title>{state ?.name || "Loading" }  </Title></Header>
			{ loading ? <Loader>Loading...</Loader> : null }
		</Container>
	)
};

export default Coin;
