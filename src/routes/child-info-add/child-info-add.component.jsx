// import { useDispatch, useSelector } from "react-redux";

// import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const ChildInfoAdd = () => {
  return (
    <Container>
      <ParentDiv>
        <BlackTitle>add your child</BlackTitle>
      </ParentDiv>

      <ParentDiv></ParentDiv>
    </Container>
  );
};

export default ChildInfoAdd;
