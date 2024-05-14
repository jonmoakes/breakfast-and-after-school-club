import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import QuickQuestion from "../database-management/db-management-shared-components/quick-question.component";
import UserOrNonUserInfoAccordion from "../database-management/db-management-shared-components/user-or-non-user-info-accordion.component";
import SetUserOfAppChoiceButtons from "../database-management/db-management-shared-components/set-user-of-app-choice-buttons.component";

import { ParentDiv } from "../../styles/div/div.styles";

const AddBookingIntro = () => {
  const { userOfAppChoice } = useGetDatabaseManagementSelectors();

  return (
    <>
      {!userOfAppChoice ? (
        <ParentDiv>
          <QuickQuestion />
          <UserOrNonUserInfoAccordion />
          <SetUserOfAppChoiceButtons />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default AddBookingIntro;
