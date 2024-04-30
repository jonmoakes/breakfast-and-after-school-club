import useSessionTimesVariables from "./hooks/use-session-times-variables";
import useConfirmUpdateAfternoonLongSessionTimes from "./hooks/use-confirm-update-afternoon-long-session-times";
import useHandleNewSessionTimesChange from "./hooks/use-handle-session-time-change";

import ReadExample from "../../components/database-management/read-example.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../styles/form/form.styles";

const UpdateAfternoonLongSessionTimeInput = () => {
  const { newAfternoonLongSessionTime } = useSessionTimesVariables();
  const { handleNewAfternoonLongSessionTimeChange } =
    useHandleNewSessionTimesChange();
  const { checkForNewAfternoonLongSessionTimeErrorsAndConfirm } =
    useConfirmUpdateAfternoonLongSessionTimes();

  return (
    <Form>
      <Label>new afternoon Long session time:</Label>
      <LowercasedInput
        type="text"
        name="newAfternoonLongSessionTime"
        onChange={handleNewAfternoonLongSessionTimeChange}
        value={newAfternoonLongSessionTime || ""}
        placeholder="ie 15:45 - 18:00"
      />

      {newAfternoonLongSessionTime ? (
        <YellowGreenButton
          type="button"
          onClick={checkForNewAfternoonLongSessionTimeErrorsAndConfirm}
        >
          Update Session Time
        </YellowGreenButton>
      ) : (
        <ReadExample />
      )}
    </Form>
  );
};

export default UpdateAfternoonLongSessionTimeInput;
