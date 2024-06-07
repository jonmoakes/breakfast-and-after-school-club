import AboutHelmet from "./about-helmet.component";
import AboutTitleAndIntro from "./about-title-and-intro.component";
import BookingsExampleImac from "./images/bookings-example-imac/bookings-example-imac.component";
import AdminPhone from "./images/admin-phone/admin-phone.component";
import DatabaseAdminImac from "./images/database-admin-imac/database-admin-imac.component";
import UserAddFundsPhone from "./images/user-add-funds-phone.component/user-add-funds-phone.component";
import UserBooksSessionPhone from "./images/user-books-session-phone.component/user-books-session-phone.component";
import UserCancelsSessionAndPdfPhone from "./images/user-cancels-session-and-pdf-phone.component/user-cancels-session-and-pdf-phone.component";
import PwaInfo from "../../components/pwa-info/pwa-info.component";
import AboutPageLinks from "./about-page-links.component";
import Footer from "../../components/footer/footer.component";

import { Container } from "../../styles/container/container.styles";

const About = () => (
  <Container>
    <AboutHelmet />
    <AboutTitleAndIntro />
    <BookingsExampleImac />
    <AdminPhone />
    <DatabaseAdminImac />
    <UserAddFundsPhone />
    <UserBooksSessionPhone />
    <UserCancelsSessionAndPdfPhone />
    <PwaInfo />
    <AboutPageLinks />
    <Footer />
  </Container>
);

export default About;
