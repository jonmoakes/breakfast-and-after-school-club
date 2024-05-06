import BookingsExampleImac from "./images/bookings-example-imac/bookings-example-imac.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const About = () => (
  <Container>
    <ParentDiv>
      <BlackTitle>about the app</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>
        with the breakfast and after school club app, you can drastically cut
        down on the amount of time and paperwork it takes to manage your
        business.
      </Text>
    </ParentDiv>

    <ParentDiv>
      <BookingsExampleImac />
    </ParentDiv>
  </Container>
);

export default About;
