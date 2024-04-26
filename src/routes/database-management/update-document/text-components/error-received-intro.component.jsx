import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";

import { Text } from "../../../../styles/p/p.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

const ErrorReceivedIntro = () => {
  const { receivedErrorFromEmail } = useGetDatabaseManagementSelectors();

  return (
    <>
      <Text>the error that happened was:</Text>
      <Text>
        <RedSpan>{receivedErrorFromEmail}</RedSpan>
      </Text>
      <Text>
        to fix this error, we need the following information that you will also
        find in your email:
      </Text>
    </>
  );
};

export default ErrorReceivedIntro;
