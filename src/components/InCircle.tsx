import styled from "styled-components";
import {useState} from "react";

interface PropsContainer{
  bgColor: string;
  borderColor: string;



}
interface PropsInCirle {
  bgColor: string;
  borderColor?: string;

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
  border: 1px solid ${props => props.borderColor};
  color:#fff;
  p{margin-top: 1rem; text-align: center; color:inherit;}
`
const Button = styled.button<PropsInCirle>`
  background-color: ${props => props.bgColor}
  color: #fff;
  font-size: 1rem;
`


const InCircle = ({bgColor, borderColor}: PropsInCirle) => {
  const [isHello, setHello] = useState<undefined | string >('');
  function sayHello (playerObj: PropsPlayerShape)  {
    setHello( `Hello ${playerObj.name}, You're ${playerObj.age} years old.`);
  }

  const[counter, setCounter] = useState<number | string>(0);

  return (
  <Container bgColor={bgColor}  borderColor={borderColor?? bgColor}>
    <Button bgColor={bgColor}
      onClick={()=>sayHello({name: "stella", age: 11} ) }
    >Hello</Button>

    {'' !== isHello ?
      <p>{isHello}</p> :
     null
    }
  </Container>
  );
}

export default InCircle;