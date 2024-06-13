import useBookedSessionsUserFunctions from "../booked-sessions-user/booked-sessions-user-hooks/use-booked-sessions-user-functions";
import NoSessionsBookedYet from "../../components/tables/no-sessions-booked-yet.component";

const NoBookingDataFound = () => {
  //shared with bookedSessionsUser so pull from that routes folder.
  const { noBookingsHaveBeenMadeYet } = useBookedSessionsUserFunctions();

  return <>{noBookingsHaveBeenMadeYet() ? <NoSessionsBookedYet /> : null}</>;
};

export default NoBookingDataFound;
