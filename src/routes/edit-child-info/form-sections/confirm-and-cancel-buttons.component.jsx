import useCancelAndReturn from "../../../hooks/use-cancel-and-return";
import useEditChildInfoLogic from "../hooks/use-edit-child-info-logic";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Text } from "../../../styles/p/p.styles";

const ConfirmAndCancelButtons = ({ updatedChildInfo }) => {
  const { confirmUpdateChildInfo } = useEditChildInfoLogic(updatedChildInfo);
  const { cancelAndReturn } = useCancelAndReturn();

  return (
    <>
      <YellowGreenButton type="button" onClick={confirmUpdateChildInfo}>
        update child info
      </YellowGreenButton>

      <Text>or</Text>
      <YellowGreenButton type="button" onClick={cancelAndReturn}>
        cancel and return
      </YellowGreenButton>
    </>
  );
};

export default ConfirmAndCancelButtons;
