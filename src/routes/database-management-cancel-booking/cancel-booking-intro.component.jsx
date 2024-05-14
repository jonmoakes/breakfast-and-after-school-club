import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";

import QuickQuestion from "../database-management/db-management-shared-components/quick-question.component";
import UserOrNonUserInfoAccordion from "../database-management/db-management-shared-components/user-or-non-user-info-accordion.component";
import SetUserOfAppChoiceButtons from "../database-management/db-management-shared-components/set-user-of-app-choice-buttons.component";

import { ParentDiv } from "../../styles/div/div.styles";

const CancelBookingIntro = () => {
  const { userOfAppChoice, matchedBookingFound } =
    useDbManageCancelBookingVariables();

  return (
    <>
      {!userOfAppChoice && !matchedBookingFound ? (
        <ParentDiv>
          <QuickQuestion />
          <UserOrNonUserInfoAccordion />
          <SetUserOfAppChoiceButtons />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default CancelBookingIntro;
