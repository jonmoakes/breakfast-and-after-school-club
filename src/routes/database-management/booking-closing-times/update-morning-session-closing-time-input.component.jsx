import useHandleClosingTimeChanges from "./hooks/use-handle-closing-time-changes";
import useConfirmUpdateMorningBookingClosingTime from "./hooks/use-confirm-update-morning-booking-closing-time";
import useBookingClosingTimesVariables from "./hooks/use-booking-closing-times-variables";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../../styles/form/form.styles";

const UpdateMorningSessionClosingTimeInput = () => {
  const { newMorningBookingClosingTime } = useBookingClosingTimesVariables();
  const { handleUpdateMorningSessionClosingTimeChange } =
    useHandleClosingTimeChanges();
  const { confirmUpdateMorningBookingClosingTime } =
    useConfirmUpdateMorningBookingClosingTime();

  return (
    <Form>
      <Label>new morning booking closing time:</Label>
      <LowercasedInput
        type="text"
        name="newMorningBookingClosingTime"
        onChange={handleUpdateMorningSessionClosingTimeChange}
        value={newMorningBookingClosingTime || ""}
        placeholder="ie 07:00"
      />

      {newMorningBookingClosingTime ? (
        <YellowGreenButton
          type="button"
          onClick={confirmUpdateMorningBookingClosingTime}
        >
          upload new time
        </YellowGreenButton>
      ) : null}
    </Form>
  );
};

export default UpdateMorningSessionClosingTimeInput;
