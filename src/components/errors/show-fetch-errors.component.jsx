import { useSelector } from "react-redux";

import { selectGetUsersChildrenError } from "../../store/get-users-children/get-users-children.selector";
import { selectRequestDateDataErrorMessage } from "../../store/request-date-data/request-date-data.slice";
import { selectGetPricesError } from "../../store/session-types-and-prices/session-types-and-prices.selector";
import { selectGetUserBookingsError } from "../../store/user-bookings/user-bookings.selector";
import { selectBookedSessionsSelectors } from "../../store/booked-sessions/booked-sessions.slice";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { ErrorDiv } from "../../styles/div/div.styles";

const ShowFetchErrors = () => {
  const getUsersChildrenError = useSelector(selectGetUsersChildrenError);
  const getUsersBookingsError = useSelector(selectGetUserBookingsError);
  const getSessionTypesAndPricesError = useSelector(selectGetPricesError);
  const requestDateError = useSelector(selectRequestDateDataErrorMessage);
  const { bookedSessionsError } = useSelector(selectBookedSessionsSelectors);

  const errorToDisplay =
    getUsersChildrenError ||
    getUsersBookingsError ||
    getSessionTypesAndPricesError ||
    requestDateError ||
    bookedSessionsError;

  const headingForError = () => {
    if (getUsersChildrenError) return "failed to fetch users children";
    if (getUsersBookingsError) return "failed to fetch users bookings";
    if (getSessionTypesAndPricesError) return "failed to fetch session prices";
    if (requestDateError) return "failed to fetch request date data";
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
