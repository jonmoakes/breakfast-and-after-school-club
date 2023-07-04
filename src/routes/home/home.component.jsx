import Intro from "./intro.component";
import Info from "./info.component";
import Links from "./links.component";

import { Container } from "../../styles/container/container.styles";

const Home = () => {
  return (
    <Container>
      <Intro />
      <Info />
      <Links />
    </Container>
  );
};

export default Home;
