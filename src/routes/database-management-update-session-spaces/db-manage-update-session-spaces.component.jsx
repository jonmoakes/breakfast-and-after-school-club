import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateSessionSpacesResultSwal from "./hooks/use-update-session-spaces-result-swal";

import Loader from "../../components/loader/loader.component";
import RequiredData from "./required-data.component";
import InputRecommendation from "../database-management/db-management-shared-components/input-recommendation.component";
import UpdateSessionSpacesForm from "./update-session-spaces-form.component";

import { Text } from "../../styles/p/p.styles";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { RedSpan } from "../../styles/span/span.styles";

const DBManageUpdateSessionSpaces = () => {
  useUpdateSessionSpacesResultSwal();

  const { databaseManagementIsLoading, errorId } =
    useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>
          <Balancer>update session spaces</Balancer>
        </BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <ParentDiv>
            {errorId === "3" ? (
              <>
                <Text>
                  <Balancer>
                    now that you have successfully updated the users balance, we
                    can update the session spaces in the database so that they
                    are correct.
                  </Balancer>
                </Text>

                <Text>
                  <Balancer>
                    <RedSpan>
                      please don't leave this page before completing this step
                      as your database data will be out of sync otherwise.
                    </RedSpan>
                  </Balancer>
                </Text>
              </>
            ) : errorId === "4" ? (
              <>
                <Text>
                  <Balancer>
                    If You're On This Page, It Means You Should Have Received An
                    Email Saying That:
                    <br />'
                    <RedSpan>
                      There has been An Error Resetting Session Data After
                      Updating A Users Balance Failed, Which Caused A Failed
                      Booking Attempt
                    </RedSpan>
                    '.
                  </Balancer>
                </Text>
                <Text>
                  <Balancer>
                    it has the error id of '<RedSpan>4</RedSpan>'
                  </Balancer>
                </Text>
              </>
            ) : null}
            {errorId === "4" ? null : (
              <Text>
                <Balancer>
                  now that we have updated the users, balance, we need to update
                  the session spaces. to fix this error, we need the following
                  data which you will also find in the same email.
                </Balancer>
              </Text>
            )}

            <RequiredData />
            <InputRecommendation />
            <Text>
              <Balancer>
                if successful, the session spaces will be restored to their
                correct values.
              </Balancer>
            </Text>
            <Text>
              <Balancer>
                if you receive an error after trying to do this, please contact
                jonathan.
              </Balancer>
            </Text>
          </ParentDiv>

          <ParentDiv>
            <UpdateSessionSpacesForm />
          </ParentDiv>
        </>
      )}
    </Container>
  );
};

export default DBManageUpdateSessionSpaces;
