import styled from "styled-components";
import {useState} from "react";

interface PropsContainer{
  bgColor: string;

}
interface PropsIncirle {
  bgColor: string;
}

interface PropsPlayerShape{
  name: string;
  age:number;
}

const Container = styled.div<PropsContainer>`
  width: 200px;
  height: 200px;
  padding: 10px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  border-radius:100px;
  color:#fff;
  p{margin-top: 1rem; text-align: center; color:inherit;}
`
const Button = styled.button<PropsIncirle>`
  background-color: ${props => props.bgColor}
  color: #fff;
  font-size: 1rem;
`


const InCircle = ({bgColor}: PropsIncirle) => {
  const [isHello, setHello] = useState<any>('');
  function sayHello (playerObj: PropsPlayerShape)  {
    setHello( `Hello ${playerObj.name}, You're ${playerObj.age} years old.`);
    console.log(`Hello ${playerObj.name}, You're ${playerObj.age} years old.`)
  }

  return (
  <Container bgColor={bgColor} >
    <Button bgColor={bgColor}
      onClick={()=>sayHello({name: "stella", age: 10} ) }
    >Hello</Button>

    {'' !== isHello ?
      <p>{isHello}</p> :
     null
    }
  </Container>
  );
}

export default InCircle;