import ChooseErrorTitleAndAccordion from "./choose-error-title-and-accordion.component";
import ErrorIdInEmailReceived from "./error-id-in-email-received.component";

import { Container } from "../../../styles/container/container.styles";

const DBManageChooseError = () => (
  <Container>
    <ChooseErrorTitleAndAccordion />
    <ErrorIdInEmailReceived />
  </Container>
);

export default DBManageChooseError;
