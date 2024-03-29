import useConfirmAddChildInfo from "./add-child-info-hooks/use-confirm-add-child-info";
import useIsOnline from "../../hooks/use-is-online";
import useAddChildInfoLogic from "./add-child-info-hooks/use-add-child-info-logic.js";

import NetworkError from "../../components/errors/network-error.component";

import {
  DisabledButton,
  YellowGreenButton,
} from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const AddChildInfoButton = () => {
  const { isOnline } = useIsOnline();
  const { confirmAddChildInfo } = useConfirmAddChildInfo();
  const { addChildInfoIsLoading } = useAddChildInfoLogic();

  return (
    <>
      <BlackHr />

      {!isOnline ? (
        <NetworkError />
      ) : !addChildInfoIsLoading ? (
        <YellowGreenButton type="button" onClick={confirmAddChildInfo}>
          add child
        </YellowGreenButton>
      ) : (
        addChildInfoIsLoading && (
          <DisabledButton className="disabled">please wait...</DisabledButton>
        )
      )}
    </>
  );
};

export default AddChildInfoButton;
