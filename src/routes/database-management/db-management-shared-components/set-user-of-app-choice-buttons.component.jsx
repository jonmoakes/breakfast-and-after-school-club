import useDatabaseManagementActions from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SetUserOfAppChoiceButtons = () => {
  const { dispatchSetUserOfAppChoice } = useDatabaseManagementActions();
  return (
    <>
      <YellowGreenButton onClick={() => dispatchSetUserOfAppChoice("non user")}>
        non user of app
      </YellowGreenButton>
      <BlackHr />
      <YellowGreenButton onClick={() => dispatchSetUserOfAppChoice("user")}>
        user of app
      </YellowGreenButton>
    </>
  );
};

export default SetUserOfAppChoiceButtons;
