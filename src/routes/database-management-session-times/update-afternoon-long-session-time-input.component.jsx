import useSessionTimesVariables from "./hooks/use-session-times-variables";
import useConfirmUpdateAfternoonLongSessionTimes from "./hooks/use-confirm-update-afternoon-long-session-times";
import useHandleNewSessionTimesChange from "./hooks/use-handle-session-time-change";

import ReadExample from "../database-management/db-management-shared-components/read-example.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../styles/form/form.styles";

const UpdateAfternoonLongSessionTimeInput = () => {
  const { newAfternoonLongSessionTime, afternoonShortSessionTime } =
    useSessionTimesVariables();
  const { handleNewAfternoonLongSessionTimeChange } =
    useHandleNewSessionTimesChange();
  const { checkForNewAfternoonLongSessionTimeErrorsAndConfirm } =
    useConfirmUpdateAfternoonLongSessionTimes();

  return (
    <Form>
      <Label>
        new afternoon {afternoonShortSessionTime ? "Long" : null} session time:
      </Label>
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
