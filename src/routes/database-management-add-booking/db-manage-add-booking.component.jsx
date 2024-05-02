import Balancer from "react-wrap-balancer";

import useAddBookingResultSwal from "./hooks/use-add-booking-result-swal";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import Loader from "../../components/loader/loader.component";
import RequiredData from "./required-data.component";
import InputRecommendation from "../../components/database-management/input-recommendation.component";
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
                to fix the error, we need the following data which you will find
                in the email:
              </Text>
              <RequiredData />
              <InputRecommendation />
              <Text>
                if successful, the user should see their booking appear in their
                table the next time they go that page, or if they reload the
                page if they're already on it.
              </Text>
              <Text>
                you as the app owner, should instantly see the booking appear in
                your database when you add the booking on this page.
              </Text>
              <Text>If it does not, please reload your table page.</Text>
              <Text>
                if you get an error when trying to do this, please contact
                jonathan.
              </Text>
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
