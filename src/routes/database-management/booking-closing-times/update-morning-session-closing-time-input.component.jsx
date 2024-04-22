import useGetDatabaseManagementSelectors from "../../../hooks/get-selectors/use-get-database-management-selectors";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../../styles/form/form.styles";
import useConfirmUpdateBookingClosingTime from "./hooks/use-confirm-update-booking-closing-time";
import useHandleUpdateMorningSessionClosingTimeChange from "./hooks/use-handle-update-morning-session-closing-time-change";

const UpdateMorningSessionClosingTimeInput = () => {
  const { newMorningBookingClosingTime } = useGetDatabaseManagementSelectors();
  const { handleUpdateMorningSessionClosingTimeChange } =
    useHandleUpdateMorningSessionClosingTimeChange();

  const { confirmUpdateBookingClosingTime } =
    useConfirmUpdateBookingClosingTime();

  return (
    <Form>
      <Label>new morning booking closing time:</Label>
      <LowercasedInput
        type="text"
        name="newMorningTime"
        onChange={handleUpdateMorningSessionClosingTimeChange}
        value={newMorningBookingClosingTime || ""}
        placeholder="ie 07:00"
      />

      {newMorningBookingClosingTime ? (
        <YellowGreenButton
          type="button"
          onClick={confirmUpdateBookingClosingTime}
        >
          upload new time
        </YellowGreenButton>
      ) : null}
    </Form>
  );
};

export default UpdateMorningSessionClosingTimeInput;
