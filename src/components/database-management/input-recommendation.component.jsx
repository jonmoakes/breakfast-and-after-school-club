import { useLocation } from "react-router-dom";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

import {
  databaseManagementAddBookingRoute,
  databaseManagementUpdateSessionSpacesRoute,
  databaseManagementUpdateUserBalanceRoute,
} from "../../strings/routes/routes-strings";

const InputRecommendation = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Text>
        please enter these values in the boxes below <RedSpan>exactly</RedSpan>{" "}
        as they are in the email and then tap 'update{" "}
        {path === databaseManagementUpdateUserBalanceRoute
          ? "balance"
          : path === databaseManagementUpdateSessionSpacesRoute
          ? "session spaces"
          : path === databaseManagementAddBookingRoute
          ? "booking"
          : "document"}
        '.
      </Text>
      <Text>
        we recommend copy and pasting the values from the email so that there
        are no errors.
      </Text>
    </>
  );
};

export default InputRecommendation;
