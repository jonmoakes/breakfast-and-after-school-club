import useSessionTimesVariables from "./hooks/use-session-times-variables";
import useConfirmUpdateAfternoonShortSessionTimes from "./hooks/use-confirm-update-afternoon-short-session-times";
import useHandleNewSessionTimesChange from "./hooks/use-handle-session-time-change";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../../styles/form/form.styles";

const UpdateAfternoonShortSessionTimeInput = () => {
  const { newAfternoonShortSessionTime } = useSessionTimesVariables();
  const { handleNewAfternoonShortSessionTimeChange } =
    useHandleNewSessionTimesChange();
  const { checkForNewAfternoonShortSessionTimeErrorsAndConfirm } =
    useConfirmUpdateAfternoonShortSessionTimes();

  return (
    <Form>
      <Label>new afternoon short session time:</Label>
      <LowercasedInput
        type="text"
        name="newAfternoonShortSessionTime"
        onChange={handleNewAfternoonShortSessionTimeChange}
        value={newAfternoonShortSessionTime || ""}
        placeholder="ie 15:45 - 16:45"
      />

      {newAfternoonShortSessionTime ? (
        <YellowGreenButton
          type="button"
          onClick={checkForNewAfternoonShortSessionTimeErrorsAndConfirm}
        >
          upload new time
        </YellowGreenButton>
      ) : null}
    </Form>
  );
};

export default UpdateAfternoonShortSessionTimeInput;
