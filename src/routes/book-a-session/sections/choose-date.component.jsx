import { useSelector } from "react-redux";

import useChooseDateHandleChange from "../book-a-session-hooks/use-choose-date-handle-change";
import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { selectGetPricesError } from "../../../store/session-types-and-prices/session-types-and-prices.selector";

import DateErrors from "./date-errors.component";
import SpacesAvailableInfo from "./spaces-available-info.component";
import ErrorFetchingPrices from "./error-fetching-prices.component";

import { Form, StyledInput, Label } from "../../../styles/form/form.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

const ChooseDate = () => {
  const { chooseDateHandleChange } = useChooseDateHandleChange();
  const { shouldShowDatePicker, date } = useConditionalLogic();

  const error = useSelector(selectGetPricesError);

  return (
    <>
      {error ? (
        <ErrorFetchingPrices />
      ) : shouldShowDatePicker() ? (
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
          <SpacesAvailableInfo />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChooseDate;
