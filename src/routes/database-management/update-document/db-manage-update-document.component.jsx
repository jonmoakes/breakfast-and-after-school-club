import { Navigate } from "react-router-dom";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateDocumentResultSwal from "./hooks/use-update-document-result-swal";

import UpdateBalanceErrorAfterCancelledBookingForm from "./update-balance-error-after-cancelled-booking-form.component";
import Loader from "../../../components/loader/loader.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

import { dbManageErrorUpdatingBalanceAfterCancellingBookingMessage } from "../../../strings/errors/errors-strings";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";

const UpdateDocument = () => {
  useUpdateDocumentResultSwal();
  const { receivedErrorFromEmail, databaseManagementIsLoading } =
    useGetDatabaseManagementSelectors();

  return (
    <Container>
      {!receivedErrorFromEmail && (
        <Navigate replace to={databaseManagementRoute} />
      )}
      <ParentDiv>
        <BlackTitle>update document</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <ParentDiv>
          <Text>the error that happened was:</Text>
          <Text>
            <RedSpan>{receivedErrorFromEmail}</RedSpan>
          </Text>
          <Text>
            to fix this error, we need the following information that you will
            also find in your email:
          </Text>

          {receivedErrorFromEmail ===
          dbManageErrorUpdatingBalanceAfterCancellingBookingMessage ? (
            <UpdateBalanceErrorAfterCancelledBookingForm />
          ) : null}
        </ParentDiv>
      )}
    </Container>
  );
};

export default UpdateDocument;
