import { useSelector } from "react-redux";
import { format } from "date-fns";

import useGetRequestDateDataValues from "../book-a-session-hooks/use-get-request-date-data-values";

import { selectRequestDateData } from "../../../store/request-date-data/request-date-data.selector";

import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const SpacesAvailable = () => {
  const { date, morningSessionSpaces, afternoonSessionSpaces } =
    useGetRequestDateDataValues();

  const requestDateData = useSelector(selectRequestDateData);

  return (
    <>
      {requestDateData ? (
        <>
          <Text>
            for <RedSpan>{format(new Date(date), "dd MMMM yyyy")}</RedSpan> we
            have the following amount of spaces available:
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

export default SpacesAvailable;
