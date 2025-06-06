import useIsOnline from "../../hooks/use-is-online";

import { BlackTitle } from "../../styles/h1/h1.styles";
import { ErrorDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

const NetworkError = () => {
  const { isOnline } = useIsOnline();

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      {isOnline ? null : (
        <ErrorDiv>
          <BlackTitle>network error</BlackTitle>
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

          <Button onClick={reload}>reload</Button>
        </ErrorDiv>
      )}
    </>
  );
};

export default NetworkError;
