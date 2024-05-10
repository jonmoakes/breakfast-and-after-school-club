import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import UserOrNonUserInfoAccordion from "../database-management/db-management-shared-components/user-or-non-user-info-accordion.component";
import SetUserOfAppChoiceButtons from "../database-management/db-management-shared-components/set-user-of-app-choice-buttons.component";

import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { BlackHr } from "../../styles/hr/hr.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { allUsersRoute } from "../../strings/routes/routes-strings";

const AddBookingIntro = () => {
  const { userOfAppChoice } = useGetDatabaseManagementSelectors();

  return (
    <>
      {!userOfAppChoice ? (
        <ParentDiv>
          <Text>on this page, you can manually add a booking.</Text>
          <BlackHr />
          <Text>
            is the booking you wish to add for a customer who doesn't use the
            app ( that you manually create bookings for )?
          </Text>

          <Text>
            Or are they a customer who does use the app to make their own
            bookings and for whatever reason, they need you to do it for them (
            this should be very rare )?
          </Text>
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
