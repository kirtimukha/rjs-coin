import { useParams } from "react-router";
import React, {useState} from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

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
/*interface RouterState{
  coinId : string
}*/
interface ILocation {
  state :{
    name: string
    rank: number
  }
}
const Coin = () => {
  const [loading, setLoading] = useState(true);
  const {coinId} = useParams<{ coinId: string }>();
  //const location = useLocation();
  const { state } = useLocation() as ILocation;
  console.log( state, state.name )
  return (
      <Container>
        <Header><Title>{ state?.name || "Loading" }</Title></Header>
        { loading ? <Loader>Loading...</Loader> :
          null
        }
    </Container>
  );
}

export default Coin;