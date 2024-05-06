import useDatabaseManagementActions from "../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const ShowWhichDocumentToDeleteButton = () => {
  const { userHasDeletedAllChildren } = useGetDatabaseManagementSelectors();
  const { dispatchSetUserHasDeletedAllChildren } =
    useDatabaseManagementActions();

  return (
    <ParentDiv>
      {!userHasDeletedAllChildren ? (
        <>
          <Text>
            finished deleting all children? tap the button below switch the from
            field to the delete user form.
          </Text>
          <YellowGreenButton
            onClick={() => dispatchSetUserHasDeletedAllChildren(true)}
          >
            continue
          </YellowGreenButton>
        </>
      ) : (
        <>
          <Text>
            need to delete more children? tap the button below to go back to the
            delete children form.
          </Text>
          <YellowGreenButton
            onClick={() => dispatchSetUserHasDeletedAllChildren(false)}
          >
            go back
          </YellowGreenButton>
        </>
      )}
    </ParentDiv>
  );
};

export default ShowWhichDocumentToDeleteButton;
