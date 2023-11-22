import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSessionPricesError } from "../../store/session-types-and-prices/session-types-and-prices.slice";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import {
  accountRoute,
  bookSessionRoute,
  contactRoute,
  userBookingsRoute,
} from "../../strings/strings";

const GetSessionPricesError = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const path = location.pathname;

  const handleClick = () => {
    dispatch(resetSessionPricesError());
    if (path === bookSessionRoute) {
      navigate(accountRoute);
    } else {
      navigate(userBookingsRoute);
    }
  };

  return (
    <>
      <ParentDiv>
        <BlueH2>error fetching session prices.</BlueH2>
        <Text>
          sorry, there was an error fetching session prices from the database.
        </Text>

        <Text>
          without this data,{" "}
          {path === bookSessionRoute
            ? "we cannot book your session"
            : "we cannot update your balance accordingly when cancelling a session."}
        </Text>
        <Text>
          if the error persists, please{" "}
          <StyledLink to={contactRoute}>contact us</StyledLink>.
        </Text>

        <Text>
          please tap the button below to{" "}
          {path === bookSessionRoute
            ? "return to the account page and try again."
            : "return to the bookings page"}
        </Text>
      </ParentDiv>

      <ParentDiv>
        <YellowGreenButton onClick={handleClick}>
          return to {path === bookSessionRoute ? "account" : "bookings"}
        </YellowGreenButton>
      </ParentDiv>
    </>
  );
};

export default GetSessionPricesError;
