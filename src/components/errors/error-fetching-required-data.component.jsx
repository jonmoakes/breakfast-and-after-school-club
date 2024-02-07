import { useLocation } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import ShowFetchErrors from "./show-fetch-errors.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import {
  bookSessionRoute,
  contactRoute,
  yourCustomerBookingsRoute,
} from "../../strings/strings";

const ErrorFetchingRequiredData = () => {
  const location = useLocation();
  const path = location.pathname;

  const reload = () => {
    window.location.reload();
  };

  return (
    <ParentDiv>
      <Text>
        {path === bookSessionRoute ? (
          <span>
            sorry, there was an error fetching data from the database which we
            need in order to make your booking.
          </span>
        ) : path === yourCustomerBookingsRoute ? (
          <span>
            sorry, there was an error fetching your bookings from the database
          </span>
        ) : null}
      </Text>

      <Text>please try reloading the page by tapping the button below.</Text>
      <Text>
        if you continue to see this error, please{" "}
        <StyledLink to={contactRoute}>contact us</StyledLink> and quote the
        following error:
      </Text>

      <ShowFetchErrors />

      <Text>we apologise for the inconvenience!</Text>
      <CustomButton onClick={reload}>reload page</CustomButton>
    </ParentDiv>
  );
};

export default ErrorFetchingRequiredData;
