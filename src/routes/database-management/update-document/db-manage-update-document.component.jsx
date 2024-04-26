import { Navigate } from "react-router-dom";

import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateDocumentResultSwal from "./hooks/use-update-document-result-swal";
import Loader from "../../../components/loader/loader.component";
import ErrorReceivedIntro from "./text-components/error-received-intro.component";
import BalanceErrorAfterCancelledBooking from "./balance-error-after-cancelled-booking/balance-error-after-cancelled-booking.component";
import BookingNotAddedToDatabase from "./booking-not-added-to-database/booking-not-added-to-database.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";

import {
  dbManageErrorUpdatingBalanceAfterCancellingBookingMessage,
  dbManageErrorAddingBookingToDatabaseMessage,
} from "../../../strings/errors/errors-strings";
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
          <ErrorReceivedIntro />

          {receivedErrorFromEmail ===
          dbManageErrorUpdatingBalanceAfterCancellingBookingMessage ? (
            <BalanceErrorAfterCancelledBooking />
          ) : null}

          {receivedErrorFromEmail ===
          dbManageErrorAddingBookingToDatabaseMessage ? (
            <BookingNotAddedToDatabase />
          ) : null}
        </ParentDiv>
      )}
    </Container>
  );
};

export default UpdateDocument;
