import { useSelector } from "react-redux";

import { selectGetUsersChildrenSelectors } from "../../store/get-users-children/get-users-children.slice";
import { selectRequestDateDataSelectors } from "../../store/request-date-data/request-date-data.slice";
import { selectGetPricesError } from "../../store/session-types-and-prices/session-types-and-prices.selector";
import { selectGetUserBookingsError } from "../../store/user-bookings/user-bookings.selector";
import { selectBookedSessionsSelectors } from "../../store/booked-sessions/booked-sessions.slice";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { ErrorDiv } from "../../styles/div/div.styles";

const ShowFetchErrors = () => {
  const { getUsersChildrenError } = useSelector(
    selectGetUsersChildrenSelectors
  );
  const getUsersBookingsError = useSelector(selectGetUserBookingsError);
  const getSessionTypesAndPricesError = useSelector(selectGetPricesError);
  const { requestDateDataError } = useSelector(selectRequestDateDataSelectors);
  const { bookedSessionsError } = useSelector(selectBookedSessionsSelectors);

  const errorToDisplay =
    getUsersChildrenError ||
    getUsersBookingsError ||
    getSessionTypesAndPricesError ||
    requestDateDataError ||
    bookedSessionsError;

  const headingForError = () => {
    if (getUsersChildrenError) return "failed to fetch users children";
    if (getUsersBookingsError) return "failed to fetch users bookings";
    if (getSessionTypesAndPricesError) return "failed to fetch session prices";
    if (requestDateDataError) return "failed to fetch request date data";
    if (bookedSessionsError) return "failed to fetch your bookings";
    return "";
  };

  return (
    <ErrorDiv>
      {errorToDisplay ? (
        <>
          <Text>{headingForError()}..</Text>
          <Text>
            error received:
            <br />'<RedSpan>{errorToDisplay}</RedSpan>'
          </Text>
        </>
      ) : null}
    </ErrorDiv>
  );
};

export default ShowFetchErrors;
