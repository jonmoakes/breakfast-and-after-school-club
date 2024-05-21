import Intro from "./intro.component";
import Info from "./info.component";
import Links from "./links.component";

import { Container } from "../../styles/container/container.styles";
import Footer from "../../components/footer/footer.component";

const Home = () => (
  <Container>
    <Intro />
    <Info />
    <Links />
    <Footer />
  </Container>
);

export default Home;
