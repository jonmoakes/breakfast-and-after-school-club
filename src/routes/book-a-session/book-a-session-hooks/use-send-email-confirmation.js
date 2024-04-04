import useSendEmailBookingConfirmationThunk from "../../../hooks/get-actions-and-thunks/send-email-actions-and-thunks/use-send-email-booking-confirmation-thunk";
import useDatesLogic from "./logic/use-dates-logic";
import useGetChildrenLogic from "./logic/use-get-children-logic";
import useSessionLogic from "./logic/use-session-logic";

const useSendEmailConfirmation = () => {
  const { date } = useDatesLogic();
  const { sessionType, sessionPrice } = useSessionLogic();
  const { usersChildren, childrenSelectedForBooking } = useGetChildrenLogic();

  const { sendEmailBookingConfirmationThunk } =
    useSendEmailBookingConfirmationThunk();

  const sendEmailConfirmation = () => {
    sendEmailBookingConfirmationThunk(
      date,
      sessionType,
      childrenSelectedForBooking,
      usersChildren,
      sessionPrice
    );
  };

  return { sendEmailConfirmation };
};

export default useSendEmailConfirmation;
