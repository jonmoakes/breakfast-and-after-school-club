import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateSessionSpacesResultSwal from "./hooks/use-update-session-spaces-result-swal";

import Loader from "../../components/loader/loader.component";
import RequiredData from "./required-data.component";
import InputRecommendation from "../../components/database-management/input-recommendation.component";
import UpdateSessionSpacesForm from "./update-session-spaces-form.component";

import { Text } from "../../styles/p/p.styles";
import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { RedSpan } from "../../styles/span/span.styles";

const DBManageUpdateSessionSpaces = () => {
  useUpdateSessionSpacesResultSwal();

  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();

  return (
    <NoHeaderFooterContainer>
      <ParentDiv>
        <BlackTitle>update session spaces</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <ParentDiv>
            <Balancer>
              <Text>
                now that you have successfully updated the users balance, we can
                update the session spaces in the database so that they are
                correct.
              </Text>

              <Text>
                <RedSpan>
                  please don't leave this page before completing this step as
                  your database data will be out of sync otherwise.
                </RedSpan>
              </Text>

              <Text>
                to fix this error, we need the following data which you will
                also find in the same email you used to update the users balance
                ( which has the error id of '<RedSpan>3</RedSpan>').
              </Text>

              <RequiredData />
              <InputRecommendation />
              <Text>
                if successful, the session spaces will be restored to their
                correct values.
              </Text>
              <Text>
                if you receive an error after trying to do this, please contact
                jonathan.
              </Text>
            </Balancer>
          </ParentDiv>

          <ParentDiv>
            <UpdateSessionSpacesForm />
          </ParentDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default DBManageUpdateSessionSpaces;
