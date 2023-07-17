import Intro from "./intro.component";
import Info from "./info.component";
import Links from "./links.component";

// import { account } from "../../utils/appwrite/appwrite-config";

import { Container } from "../../styles/container/container.styles";
// import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   const test = async () => {
  //     console.log(await account.get());
  //   };
  //   test();
  // }, []);
  return (
    <Container>
      <Intro />
      <Info />
      <Links />
    </Container>
  );
};
export default Home;
