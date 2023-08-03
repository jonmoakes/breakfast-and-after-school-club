import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const Dashboard = () => {
  return (
    <Container>
      <ParentDiv>
        <BlackTitle>dashboard</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <BlueH2>what would you like to do?</BlueH2>
      </ParentDiv>
    </Container>
  );
};

export default Dashboard;
