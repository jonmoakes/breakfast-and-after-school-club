import useChooseDateHandleChange from "../book-a-session-hooks/use-choose-date-handle-change";
import useGetDateDataEarlyFinishDatesAndBookingClosingTimes from "../book-a-session-hooks/use-get-date-data-early-finish-dates-and-booking-closing-times";

import DateErrors from "./date-errors.component";
import NoSpacesAvailableInfo from "./no-spaces-available-info.component";

import { Form, StyledInput, Label } from "../../../styles/form/form.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import useDatesLogic from "../book-a-session-hooks/dates-logic/use-dates-logic";

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
