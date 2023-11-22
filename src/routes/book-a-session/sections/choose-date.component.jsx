import { useSelector } from "react-redux";

import useChooseDateHandleChange from "../book-a-session-hooks/use-choose-date-handle-change";
import useConditionalLogic from "../book-a-session-hooks/use-conditional-logic";

import { selectGetPricesError } from "../../../store/session-types-and-prices/session-types-and-prices.selector";

import DateErrors from "./date-errors.component";
import SpacesAvailableInfo from "./spaces-available-info.component";
import ErrorFetchingPrices from "../../../components/errors/get-session-prices-error.component";

import { Form, StyledInput, Label } from "../../../styles/form/form.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import useRequestDateData from "../book-a-session-hooks/use-request-date-data";

const ChooseDate = () => {
  //get sessions spaces and date info for the chosen date.
  useRequestDateData();
  const { chooseDateHandleChange } = useChooseDateHandleChange();
  const { shouldShowDatePicker, date } = useConditionalLogic();

  const fetchPricesError = useSelector(selectGetPricesError);

  return (
    <>
      {fetchPricesError ? (
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
