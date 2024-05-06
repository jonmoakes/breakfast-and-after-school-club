import BookingsExampleImac from "./images/bookings-example-imac/bookings-example-imac.component";
import AdminPhone from "./images/admin-phone/admin-phone.component";
import DatabaseAdminImac from "./images/database-admin-imac/database-admin-imac.component";
import UserAddFundsPhone from "./images/user-add-funds-phone.component/user-add-funds-phone.component";
import UserBooksSessionPhone from "./images/user-books-session-phone.component/user-books-session-phone.component";

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

      <Text>
        Tap on the images to view the full-size image
        <br />( or pinch to zoom )
      </Text>
    </ParentDiv>

    <ParentDiv>
      <BookingsExampleImac />
    </ParentDiv>

    <ParentDiv>
      <AdminPhone />
    </ParentDiv>

    <ParentDiv>
      <DatabaseAdminImac />
    </ParentDiv>

    <ParentDiv>
      <UserAddFundsPhone />
    </ParentDiv>

    <ParentDiv>
      <UserBooksSessionPhone />
    </ParentDiv>
  </Container>
);

export default About;
