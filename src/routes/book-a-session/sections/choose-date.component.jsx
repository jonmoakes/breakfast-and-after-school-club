import useChooseDateHandleChange from "../book-a-session-hooks/actions/use-choose-date-handle-change";
import useGetDateDataEarlyFinishDatesAndBookingClosingTimes from "../book-a-session-hooks/actions/use-get-date-data-early-finish-dates-and-booking-closing-times";
import useDatesLogic from "../book-a-session-hooks/logic/use-dates-logic";

import DateErrors from "./date-errors.component";
import NoSpacesAvailableInfo from "./no-spaces-available-info.component";

import { Form, StyledInput, Label } from "../../../styles/form/form.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

const ChooseDate = () => {
  useGetDateDataEarlyFinishDatesAndBookingClosingTimes();
  const { chooseDateHandleChange } = useChooseDateHandleChange();
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
              onChange={chooseDateHandleChange}
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
