import useBookedSessionsOwnerFunctions from "../booked-sessions-owner/booked-sessions-owner-hooks/use-booked-sessions-owner-functions";

import NoSessionsBookedYet from "../../components/tables/no-sessions-booked-yet.component";

const NoBookingDataFound = () => {
  //shared with bookedSessionsOwner so pull from that routes folder.
  const { noSessionsBookedYet } = useBookedSessionsOwnerFunctions();

  return <>{noSessionsBookedYet() ? <NoSessionsBookedYet /> : null}</>;
};

export default NoBookingDataFound;
