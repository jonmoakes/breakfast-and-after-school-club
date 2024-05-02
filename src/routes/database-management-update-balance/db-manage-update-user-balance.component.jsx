import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateBalanceResultSwal from "./hooks/use-update-balance-result-swal";

import Loader from "../../components/loader/loader.component";
import RequiredData from "./required-data.component";
import InputRecommendation from "../../components/database-management/input-recommendation.component";
import UpdateBalanceForm from "../../components/database-management/update-balance-form.component";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const DBManageUpdateUserBalance = () => {
  useUpdateBalanceResultSwal();
  const { databaseManagementIsLoading, errorId } =
    useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>update a users balance</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <ParentDiv>
            <Balancer>
              <Text>
                if you're on this page, it means you should have received an
                email saying that
                {errorId === "1" ? (
                  <>
                    <br />'
                    <RedSpan>
                      There Was An Error Updating A Users Balance After They
                      Cancelled A Booking
                    </RedSpan>
                    '
                  </>
                ) : errorId === "3" ? (
                  <>
                    <br />'
                    <RedSpan>
                      A user cancelled a booking, but There Was An Error
                      Updating the Session Spaces on the date of the cancelled
                      booking. also, the users balance was not updated correctly
                    </RedSpan>
                    '
                  </>
                ) : (
                  ""
                )}
                .
              </Text>
              <Text>
                in the email, it has the error id of
                <br />'<RedSpan>{errorId}</RedSpan>'
              </Text>

              {errorId === "3" ? (
                <>
                  <Text>we are going to fix this error in 2 parts.</Text>
                  <Text>
                    here, we will update the users balance to the correct value.
                  </Text>
                  <Text>
                    once this is successful, we will update the session spaces
                    available to their correct number.
                  </Text>
                </>
              ) : null}

              <Text>
                to fix the users balance error, we need the following data which
                you will find in the email:
              </Text>
              <RequiredData />
              <InputRecommendation />
              <Text>
                if successful, the user should instantly see their balance
                updated to the correct amount.
              </Text>
              {errorId === "3" ? (
                <>
                  <Text>
                    one you receive confirmation of the successful updating of a
                    users balance, when you tap 'ok' in the alert box that shows
                    up, you will be taken to the next form where you can update
                    the session spaces.
                  </Text>
                </>
              ) : null}

              <Text>
                if you receive an error when trying to update this value, please
                contact jonathan.
              </Text>
            </Balancer>
          </ParentDiv>

          <ParentDiv>
            <UpdateBalanceForm />
          </ParentDiv>
        </>
      )}
    </Container>
  );
};

export default DBManageUpdateUserBalance;
