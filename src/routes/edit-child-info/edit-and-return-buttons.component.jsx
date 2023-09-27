import useConfirmUpdateChildInfo from "./hooks/use-confirm-update-child-info";
import useCancelAndReturn from "../../hooks/use-cancel-and-return";

import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const EditAndReturnButtons = ({ updatedChildInfo }) => {
  const { confirmUpdateChildInfo } = useConfirmUpdateChildInfo();
  const { cancelAndReturn } = useCancelAndReturn();

  return (
    <>
      <YellowGreenButton
        type="button"
        onClick={() => confirmUpdateChildInfo(updatedChildInfo)}
      >
        update child info
      </YellowGreenButton>

      <Text>or</Text>
      <YellowGreenButton type="button" onClick={cancelAndReturn}>
        cancel and return
      </YellowGreenButton>
    </>
  );
};

export default EditAndReturnButtons;
