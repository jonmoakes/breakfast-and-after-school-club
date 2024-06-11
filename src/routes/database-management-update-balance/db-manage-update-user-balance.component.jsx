import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateBalanceResultSwal from "./hooks/use-update-balance-result-swal";

import Loader from "../../components/loader/loader.component";
import RequiredData from "./required-data.component";
import InputRecommendation from "../database-management/db-management-shared-components/input-recommendation.component";
import UpdateBalanceForm from "./update-balance-form.component";

import { RedText, Text } from "../../styles/p/p.styles";
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
            {errorId ? (
              <>
                <RedText>
                  please make sure not to use the reload button whilst on this
                  page.
                </RedText>
                <Text>
                  <Balancer>
                    if you're on this page, it means you should have received an
                    email saying that
                    <br />
                    {errorId === "1" ? (
                      <>
                        <br />'
                        <RedSpan>
                          There Was An Error Updating A Users Balance After They
                          Cancelled A Booking
                        </RedSpan>
                        '
                        <br />
                        OR
                        <br />'
                        <RedSpan>
                          There Was An Error Adding A Users Balance to the
                          database after they added funds
                        </RedSpan>
                        '
                      </>
                    ) : errorId === "3" ? (
                      <>
                        <br />'
                        <RedSpan>
                          A user cancelled a booking, but There Was An Error
                          Updating the Session Spaces on the date of the
                          cancelled booking. also, the users balance was not
                          updated correctly
                        </RedSpan>
                        '
                      </>
                    ) : (
                      ""
                    )}
                    .
                  </Balancer>
                </Text>
                <Text>
                  <Balancer>
                    in the email, it has the error id of
                    <br />'<RedSpan>{errorId}</RedSpan>'
                  </Balancer>
                </Text>

                {errorId === "3" ? (
                  <>
                    <Text>
                      <Balancer>
                        we are going to fix this error in 2 parts.
                      </Balancer>
                    </Text>
                    <Text>
                      <Balancer>
                        here, we will update the users balance to the correct
                        value.
                      </Balancer>
                    </Text>
                    <Text>
                      <Balancer>
                        once this is successful, we will update the session
                        spaces available to their correct number.
                      </Balancer>
                    </Text>
                  </>
                ) : null}

                <Text>
                  <Balancer>
                    to fix the users balance error, we need the following data
                    which you will find in the email:
                  </Balancer>
                </Text>
              </>
            ) : null}

            {!errorId ? (
              <>
                <Text>
                  <Balancer>
                    you may want to update the users virtual wallet balance in
                    some instances.
                  </Balancer>
                </Text>
                <Text>
                  <Balancer>
                    for example, if the parent has paid you with a childcare
                    voucher.
                  </Balancer>
                </Text>
                <Text>
                  in this case, once you have received payment, you can update
                  the parents virtual wallet here.
                </Text>
                <Text>the parent can then book sessions as normal.</Text>

                <Text>you will need the following data:</Text>
              </>
            ) : null}
            <RequiredData {...{ errorId }} />

            {!errorId ? (
              <>
                <Text>
                  <RedSpan>
                    please note that the 'amount to add value' should be in{" "}
                    pence
                  </RedSpan>
                  .
                </Text>
                <Text>
                  <RedSpan>for example, enter 500 for £5. </RedSpan>
                </Text>
              </>
            ) : null}

            {errorId ? <InputRecommendation /> : null}

            <Text>
              <Balancer>
                if successful, the user should instantly see their balance
                updated to the correct amount.
              </Balancer>
            </Text>
            {errorId === "3" ? (
              <>
                <Text>
                  <Balancer>
                    one you receive confirmation of the successful updating of a
                    users balance, when you tap 'ok' in the alert box that shows
                    up, you will be taken to the next form where you can update
                    the session spaces.
                  </Balancer>
                </Text>
              </>
            ) : null}

            <Text>
              <Balancer>
                if you receive an error when trying to update this value, please
                contact jonathan.
              </Balancer>
            </Text>
          </ParentDiv>

          <ParentDiv>
            <UpdateBalanceForm {...{ errorId }} />
          </ParentDiv>
        </>
      )}
    </Container>
  );
};

export default DBManageUpdateUserBalance;
