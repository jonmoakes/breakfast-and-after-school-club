import HomeHelmet from "./home-helmet.component";
import Intro from "./intro.component";
import Info from "./info.component";
import Links from "./links.component";
import Footer from "../../components/footer/footer.component";

import { Container } from "../../styles/container/container.styles";

const Home = () => (
  <Container>
    <HomeHelmet />
    <Intro />
    <Info />
    <Links />
    <Footer />
  </Container>
);

export default Home;
