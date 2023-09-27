import useConfirmDeleteChildInfo from "./hooks/use-confirm-delete-child-info";
import useCancelAndReturn from "../../hooks/use-cancel-and-return";

import { ParentDiv } from "../../styles/div/div.styles";

import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const DeleteAndReturnButtons = () => {
  const { confirmDeleteChildInfo } = useConfirmDeleteChildInfo();
  const { cancelAndReturn } = useCancelAndReturn();

  return (
    <ParentDiv>
      <YellowGreenButton type="button" onClick={confirmDeleteChildInfo}>
        delete child
      </YellowGreenButton>

      <Text>or</Text>
      <YellowGreenButton type="button" onClick={cancelAndReturn}>
        cancel and return
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default DeleteAndReturnButtons;
