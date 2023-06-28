import { Link } from "react-router-dom";
import Intro from "./intro.component";
import Info from "./info.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/buttons/buttons.styles";

import { bookSessionRoute, contactRoute } from "../../strings/strings";
import { Text } from "../../styles/p/p.styles";

const Home = () => {
  return (
    <Container>
      <Intro />
      <Info />

      <ParentDiv>
        <Link to={bookSessionRoute}>
          <Button>book a session</Button>
        </Link>
        <Text>or</Text>
        <Link to={contactRoute}>
          <Button>contact us</Button>
        </Link>
      </ParentDiv>
    </Container>
  );
};

export default Home;
