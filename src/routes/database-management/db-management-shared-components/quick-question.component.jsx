import { useLocation } from "react-router-dom";
import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import {
  allUsersRoute,
  databaseManagementAddBookingRoute,
} from "../../../strings/routes/routes-strings";

const QuickQuestion = () => {
  const location = useLocation();
  const path = location.pathname;

  const isAddBookingRoute = () => {
    return path === databaseManagementAddBookingRoute && true;
  };

  return (
    <>
      <Text>
        on this page, you can manually {isAddBookingRoute() ? "add" : "cancel"}{" "}
        a booking.
      </Text>
      <BlackHr />
      <BlueH2>quick question:</BlueH2>
      <Text>
        <Balancer>
          is the customer a non user of the app
          <br />( ie, you {isAddBookingRoute() ? "Create" : "Cancel"} the
          bookings for them )?
        </Balancer>
      </Text>
      <Text>
        <Balancer>
          or is the customer a user of the app
          <br />( ie they normally {isAddBookingRoute()
            ? "Make"
            : "Cancel"}{" "}
          their own bookings ),
        </Balancer>
      </Text>
      <BlackHr />
      <Text>
        if you're unsure, see if their <RedSpan>wallet balance</RedSpan> in your{" "}
        <StyledLink to={allUsersRoute}>users table</StyledLink> is '
        <RedSpan>N / A</RedSpan>'' or not.
      </Text>
      <Text>
        if the value is N / A, then it means that they are a non user of the
        app.
      </Text>
    </>
  );
};

export default QuickQuestion;
