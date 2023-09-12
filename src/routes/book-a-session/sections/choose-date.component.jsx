import { useSelector } from "react-redux";

import useChooseDateHandleChange from "../book-a-session-hooks/use-choose-date-handle-change";
import useGetRequestDateDataValues from "../book-a-session-hooks/use-get-request-date-data-values";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectMorningSessionPrice } from "../../../store/session-types-and-prices/session-types-and-prices.selector";

import DateErrors from "./date-errors.component";
import SpacesAvailableInfo from "./spaces-available-info.component";

import { Form, StyledInput, Label } from "../../../styles/form/form.styles";

import { tomorrow } from "../../../functions/get-future-dates";
import { ParentDiv } from "../../../styles/div/div.styles";

import { priceMultipliedBy100 } from "../../../functions/price-multiplied-by-100";

const ChooseDate = () => {
  const { date } = useGetRequestDateDataValues();
  const { chooseDateHandleChange } = useChooseDateHandleChange();

  const currentUser = useSelector(selectCurrentUser);
  const sessionPrice = useSelector(selectMorningSessionPrice);

  const { walletBalance } = currentUser;
  const tomorrowsDate = tomorrow.toISOString().split("T")[0];

  const shouldShowDatePicker = () => {
    return walletBalance && walletBalance >= priceMultipliedBy100(sessionPrice)
      ? true
      : false;
  };

  return (
    <>
      {shouldShowDatePicker() ? (
        <ParentDiv>
          <Form className="book-session">
            <Label>choose date:</Label>
            <StyledInput
              type="date"
              name="chosenDate"
              min={tomorrowsDate}
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
