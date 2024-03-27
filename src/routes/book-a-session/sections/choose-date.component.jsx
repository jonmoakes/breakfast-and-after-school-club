import useGetDateDataEarlyFinishDatesBookingClosingTimesAndSessionTimesUseEffect from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-get-date-data-early-finish-dates-booking-closing-times-and-session-times-use-effect";
import useDatesLogic from "../book-a-session-hooks/logic/use-dates-logic";

import DateErrors from "./date-errors.component";
import NoSpacesAvailableInfo from "./no-spaces-available-info.component";

import { Form, StyledInput, Label } from "../../../styles/form/form.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import useRequestDateDataActions from "../../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-request-date-data-actions";

const ChooseDate = () => {
  useGetDateDataEarlyFinishDatesBookingClosingTimesAndSessionTimesUseEffect();
  const { dispatchSetChosenDate } = useRequestDateDataActions();
  const { shouldShowDatePicker, date } = useDatesLogic();

  return (
    <>
      {shouldShowDatePicker() ? (
        <ParentDiv>
          <Form className="book-session">
            <Label>choose date:</Label>
            <StyledInput
              type="date"
              name="chosenDate"
              onChange={dispatchSetChosenDate}
              value={date || ""}
            />
          </Form>
          <DateErrors />
          <NoSpacesAvailableInfo />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChooseDate;
