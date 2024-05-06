import Balancer from "react-wrap-balancer";

import useAddBookingResultSwal from "./hooks/use-add-booking-result-swal";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import Loader from "../../components/loader/loader.component";
import ManuallyAddBookingInstructionsAccordion from "./manually-add-booking-instructions-accordion.component";
import RequiredData from "./required-data.component";
import InputRecommendation from "../database-management/db-management-shared-components/input-recommendation.component";
import SuccessAndFailInfo from "./success-and-fail-info.component";
import AddBookingForm from "./add-booking-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const DbManageAddBooking = () => {
  useAddBookingResultSwal();
  const { databaseManagementIsLoading, errorId } =
    useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>add a booking</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <ParentDiv>
            <Balancer>
              {!errorId ? (
                <>
                  <Text>
                    here, you can manually add a booking for a user that doesn't
                    use the app.
                  </Text>
                  <ManuallyAddBookingInstructionsAccordion />
                </>
              ) : (
                <>
                  <Text>
                    if you're on this page, it means you should have received an
                    email saying that:
                    <br />'
                    <RedSpan>
                      There Was An Error Adding A Users Booking To The Database
                    </RedSpan>
                    '
                  </Text>

                  <Text>
                    in the email, it has the error id of
                    <br />'<RedSpan>{errorId}</RedSpan>'
                  </Text>
                  <Text>
                    to fix the error, we need the following data which you will
                    find in the email:
                  </Text>
                  <RequiredData />
                  <InputRecommendation />
                  <SuccessAndFailInfo />
                </>
              )}
            </Balancer>
          </ParentDiv>

          <ParentDiv>
            <AddBookingForm />
          </ParentDiv>
        </>
      )}
    </Container>
  );
};
export default DbManageAddBooking;
