import useSessionTimesVariables from "./hooks/use-session-times-variables";
import useConfirmUpdateMorningSessionTimes from "./hooks/use-confirm-update-morning-session-times";
import useHandleNewSessionTimesChange from "./hooks/use-handle-session-time-change";

import ReadExample from "../read-example.component";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Form, Label, LowercasedInput } from "../../../styles/form/form.styles";

const UpdateMorningSessionTimeInput = () => {
  const { newMorningSessionTime } = useSessionTimesVariables();
  const { handleNewMorningSessionTimeChange } =
    useHandleNewSessionTimesChange();
  const { checkForNewMorningSessionTimeErrorsAndConfirm } =
    useConfirmUpdateMorningSessionTimes();

  return (
    <Form>
      <Label>new morning session time:</Label>
      <LowercasedInput
        type="text"
        name="newMorningSessionTime"
        onChange={handleNewMorningSessionTimeChange}
        value={newMorningSessionTime || ""}
        placeholder="ie 07:30 - 08:45"
      />

      {newMorningSessionTime ? (
        <YellowGreenButton
          type="button"
          onClick={checkForNewMorningSessionTimeErrorsAndConfirm}
        >
          Update Session Time
        </YellowGreenButton>
      ) : (
        <ReadExample />
      )}
    </Form>
  );
};

export default UpdateMorningSessionTimeInput;
