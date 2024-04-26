import useSetErrorAndNavigateToUpdateDocumentButtons from "./use-set-error-and-navigate-to-update-document-buttons";

import RenderButtonsList from "../../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

const ErrorIdInEmailReceived = () => {
  const { setErrorButtons } = useSetErrorAndNavigateToUpdateDocumentButtons();

  return (
    <>
      <ParentDiv>
        <Text>
          please tap on the button that has the same error id as the one that
          you received in the email.
        </Text>
      </ParentDiv>
      <RenderButtonsList {...{ buttons: setErrorButtons }} />
    </>
  );
};

export default ErrorIdInEmailReceived;
