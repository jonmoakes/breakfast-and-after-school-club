import useIsOnline from "../../hooks/use-is-online";
import useFireSwal from "../../hooks/use-fire-swal";

import CustomButton from "../custom-button/custom-button.component";

import { ErrorDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

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
        <ErrorDiv>
          <h1>network error</h1>
          <Text>
            we've noticed that your internet connection seems to be offline.
          </Text>
          <Text>
            some features on this page may not be available until your network
            connection is restored.
          </Text>
          <Text>
            please check your connection. this warning will disappear when your
            connection has been restored.
          </Text>
          <Text>or you can tap the reload page button below to try again.</Text>

          <CustomButton onClick={reload}>reload</CustomButton>
        </ErrorDiv>
      ) : null}
    </>
  );
};

export default NetworkError;
