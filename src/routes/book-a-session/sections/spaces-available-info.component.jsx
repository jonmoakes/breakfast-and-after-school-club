import { format } from "date-fns";

import useCheckSpacesAvailableAndBalance from "../book-a-session-hooks/use-check-spaces-available-and-balance";

import useGetRequestDateDataValues from "../book-a-session-hooks/use-get-request-date-data-values";

import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SpacesAvailableInfo = () => {
  const {
    noSessionsAvailable,
    onlyMorningSessionsAvailable,
    onlyAfternoonSessionsAvailable,
    allSessionsAvailable,
    noDateSelected,
  } = useCheckSpacesAvailableAndBalance();

  const { date, morningSessionSpaces, afternoonSessionSpaces } =
    useGetRequestDateDataValues();

  return (
    <>
      {noDateSelected() ? null : noSessionsAvailable() ? (
        <>
          <Text>sorry, we have no sessions available today.</Text>
          <Text>
            if any become available, they will be updated here in realtime so
            please check back regularly!
          </Text>
        </>
      ) : onlyMorningSessionsAvailable() ||
        onlyAfternoonSessionsAvailable() ||
        allSessionsAvailable() ? (
        <>
          <Text>
            for{" "}
            <RedSpan>
              {date ? format(new Date(date), "dd MMMM yyyy") : null}
            </RedSpan>{" "}
            we have the following amount of spaces available:
          </Text>
          <Text>
            morning session spaces:
            <br />
            <RedSpan>{morningSessionSpaces}</RedSpan>
          </Text>
          <Text>
            afternoon session spaces:
            <br />
            <RedSpan>{afternoonSessionSpaces}</RedSpan>
          </Text>
        </>
      ) : null}
    </>
  );
};

export default SpacesAvailableInfo;
