import useHandleClosingTimeChanges from "./hooks/use-handle-closing-time-changes";
import useConfirmUpdateAfternoonBookingClosingTime from "./hooks/use-confirm-update-afternoon-booking-closing-time";
import useBookingClosingTimesVariables from "./hooks/use-booking-closing-times-variables";

import ReadExample from "../read-example.component";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../../styles/form/form.styles";

const UpdateAfternoonSessionClosingTimeInput = () => {
  const { newAfternoonBookingClosingTime } = useBookingClosingTimesVariables();
  const { handleUpdateAfternoonSessionClosingTimeChange } =
    useHandleClosingTimeChanges();
  const { confirmUpdateAfternoonBookingClosingTime } =
    useConfirmUpdateAfternoonBookingClosingTime();

  return (
    <Form>
      <Label>new afternoon booking closing time:</Label>
      <LowercasedInput
        type="text"
        name="newAfternoonBookingClosingTime"
        onChange={handleUpdateAfternoonSessionClosingTimeChange}
        value={newAfternoonBookingClosingTime || ""}
        placeholder="ie 14:45"
      />

      {newAfternoonBookingClosingTime ? (
        <YellowGreenButton
          type="button"
          onClick={confirmUpdateAfternoonBookingClosingTime}
        >
          upload new time
        </YellowGreenButton>
      ) : (
        <ReadExample />
      )}
    </Form>
  );
};

export default UpdateAfternoonSessionClosingTimeInput;
