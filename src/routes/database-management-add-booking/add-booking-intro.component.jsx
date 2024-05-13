import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import UserOrNonUserInfoAccordion from "../database-management/db-management-shared-components/user-or-non-user-info-accordion.component";
import SetUserOfAppChoiceButtons from "../database-management/db-management-shared-components/set-user-of-app-choice-buttons.component";

import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { BlackHr } from "../../styles/hr/hr.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { allUsersRoute } from "../../strings/routes/routes-strings";
import Balancer from "react-wrap-balancer";
import { BlueH2 } from "../../styles/h2/h2.styles";

const AddBookingIntro = () => {
  const { userOfAppChoice } = useGetDatabaseManagementSelectors();

  return (
    <>
      {!userOfAppChoice ? (
        <ParentDiv>
          <Text>on this page, you can manually add a booking.</Text>
          <BlackHr />
          <Balancer>
            <BlueH2>quick question:</BlueH2>
            <Text>
              is the customer a user of the app
              <br />( ie they normally make their own bookings ),
            </Text>
            <Text>
              or a non user of the app
              <br />( ie, you create the bookings for them )?
            </Text>
          </Balancer>

          <BlackHr />
          <Text>
            if you're unsure, see if their <RedSpan>wallet balance</RedSpan> in
            your <StyledLink to={allUsersRoute}>users table</StyledLink> is '
            <RedSpan>N / A</RedSpan>'' or not.
          </Text>
          <Text>
            if the value is N / A, then it means that they are a non user of the
            app.
          </Text>

          <UserOrNonUserInfoAccordion />
          <SetUserOfAppChoiceButtons />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AddBookingIntro;
