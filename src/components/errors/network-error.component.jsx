import useIsOnline from "../../hooks/use-is-online";
import useFireSwal from "../../hooks/use-fire-swal";

import CustomButton from "../custom-button/custom-button.component";

import { NetworkErrorDiv } from "../../styles/div/div.styles";
import { BlackHeading } from "../../styles/h1/h1.styles";
import { BlackText } from "../../styles/p/p.styles";

const NetworkError = () => {
  useIsOnline();
  const { error, isOnline } = useIsOnline();
  const { fireSwal } = useFireSwal();

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      {isOnline && null}
      {error && fireSwal("error", error, "", 0, true, true)}
      {!isOnline ? (
        <NetworkErrorDiv>
          <BlackHeading>network error</BlackHeading>
          <BlackText>
            we've noticed that your internet connection seems to be offline.
          </BlackText>
          <BlackText>
            some features on this page may not be available until your network
            connection is restored.
          </BlackText>
          <BlackText>
            please check your connection. this warning will disappear when your
            connection has been restored.
          </BlackText>
          <BlackText>
            or you can tap the reload page button below to try again.
          </BlackText>

          <CustomButton onClick={reload}>reload</CustomButton>
        </NetworkErrorDiv>
      ) : null}
    </>
  );
};

export default NetworkError;
