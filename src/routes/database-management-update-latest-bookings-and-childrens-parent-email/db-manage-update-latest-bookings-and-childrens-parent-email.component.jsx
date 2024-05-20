import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useUpdateLatestBookingsAndChildrensParentEmailResultSwal from "./hooks/use-update-latest-bookings-and-childrens-parent-email-result-swal";

import Loader from "../../components/loader/loader.component";
import RequiredData from "./required-data.component";
import InputRecommendation from "../database-management/db-management-shared-components/input-recommendation.component";
import UpdateBookingsAndChildrensParentEmailAccordion from "./update-bookings-and-childrens-parent-email-accordion.component";
import UpdateParentsEmailForm from "./update-parents-email-form.component";

import { RedText, Text } from "../../styles/p/p.styles";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const DBManageUpdateLatestBookingsAndChildrensParentEmail = () => {
  useUpdateLatestBookingsAndChildrensParentEmailResultSwal();

  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <Balancer>
          <BlackTitle>
            update your latest bookings and childrens list parent email
          </BlackTitle>
        </Balancer>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <ParentDiv>
            <Text>
              you should only need to be on this page if you have received an
              email, where the first line is:
            </Text>
            <RedText>
              A User Recently Updated Their Email Address In The Database.
            </RedText>

            <Text>
              please tap the button below for important information on why you
              should be on this page and what you need to do .
            </Text>

            <UpdateBookingsAndChildrensParentEmailAccordion />

            <RequiredData />
            <InputRecommendation />
          </ParentDiv>

          <UpdateParentsEmailForm />
        </>
      )}
    </Container>
  );
};

export default DBManageUpdateLatestBookingsAndChildrensParentEmail;
