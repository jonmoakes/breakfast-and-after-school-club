import useGetDataValues from "../book-a-session-hooks/use-date-data-values";

import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SpacesAvailable = () => {
  const { requestDateData, morningSessionSpaces, afternoonSessionSpaces } =
    useGetDataValues();

  return (
    <>
      {!requestDateData ? null : (
        <>
          <Text>
            morning session spaces available:
            <br />
            <RedSpan>{morningSessionSpaces}</RedSpan>
          </Text>
          <Text>
            afternoon session spaces available:
            <br />
            <RedSpan>{afternoonSessionSpaces}</RedSpan>
          </Text>
        </>
      )}
    </>
  );
};

export default SpacesAvailable;
