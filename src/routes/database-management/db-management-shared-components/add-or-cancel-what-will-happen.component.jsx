import { useLocation } from "react-router-dom";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { databaseManagementAddBookingRoute } from "../../../strings/routes/routes-strings";

const AddOrCancelWhatWillHappenInfo = ({ userOfAppChoice }) => {
  const location = useLocation();
  const path = location.pathname;

  const isAddingBookingRoute = () => {
    return path === databaseManagementAddBookingRoute && true;
  };

  return (
    <>
      {!userOfAppChoice ? null : (
        <ParentDiv>
          {userOfAppChoice === "user" ? (
            <Text>
              {isAddingBookingRoute() ? "Adding" : "Cancelling"} the booking
              will {isAddingBookingRoute() ? "Add" : "Delete"} it in the
              database, then update the users balance and finally update the
              session spaces.
            </Text>
          ) : (
            <Text>
              {isAddingBookingRoute() ? "Adding" : "Cancelling"} the booking
              will {isAddingBookingRoute() ? "Add" : "Delete"} it in the
              database, then update the session spaces.
            </Text>
          )}
        </ParentDiv>
      )}
    </>
  );
};

export default AddOrCancelWhatWillHappenInfo;
