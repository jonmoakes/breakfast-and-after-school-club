import { useSelector } from "react-redux";

import useConfirmAddChildInfo from "./add-child-info-hooks/use-confirm-add-child-info";
import useIsOnline from "../../hooks/use-is-online";

import { selectAddChildInfoIsLoading } from "../../store/add-child-info/add-child-info.slice";

import NetworkError from "../../components/errors/network-error.component";

import {
  DisabledButton,
  YellowGreenButton,
} from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const AddChildInfoButton = () => {
  const { isOnline } = useIsOnline();
  const { confirmAddChildInfo } = useConfirmAddChildInfo();

  const isLoading = useSelector(selectAddChildInfoIsLoading);

  return (
    <>
      <BlackHr />

      {!isOnline ? (
        <NetworkError />
      ) : isOnline && !isLoading ? (
        <YellowGreenButton type="button" onClick={confirmAddChildInfo}>
          add child
        </YellowGreenButton>
      ) : (
        isOnline &&
        isLoading && (
          <DisabledButton className="disabled">please wait...</DisabledButton>
        )
      )}
    </>
  );
};

export default AddChildInfoButton;
