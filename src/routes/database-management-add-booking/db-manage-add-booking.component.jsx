import useAddBookingResultSwal from "./hooks/use-add-booking-result-swal";
import useGetSessionPricesThunkUseEffect from "../../hooks/get-actions-and-thunks/session-types-and-prices-actions-and-thunks/use-get-session-prices-thunk-use-effect";
import useDbManageAddBookingVariables from "./hooks/use-db-manage-add-booking-variables";

import Loader from "../../components/loader/loader.component";
import AddBookingIntro from "./add-booking-intro.component";
import AddBookingIntroWithErrorId from "./add-booking-intro-with-error-id.component";
import RequiredData from "./required-data.component";
import InputRecommendation from "../database-management/db-management-shared-components/input-recommendation.component";
import SuccessAndFailInfo from "./success-and-fail-info.component";
import AddBookingForm from "./add-booking-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const DbManageAddBooking = () => {
  useAddBookingResultSwal();
  useGetSessionPricesThunkUseEffect();
  const { databaseManagementIsLoading, errorId } =
    useDbManageAddBookingVariables();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>add a booking</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          {!errorId ? (
            <>
              <AddBookingIntro />
            </>
          ) : (
            <>
              <AddBookingIntroWithErrorId />
              <RequiredData />

              <ParentDiv>
                <InputRecommendation />
              </ParentDiv>

              <ParentDiv>
                <SuccessAndFailInfo />
              </ParentDiv>
            </>
          )}

          <AddBookingForm />
        </>
      )}
    </Container>
  );
};
export default DbManageAddBooking;
