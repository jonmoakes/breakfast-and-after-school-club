import { useSelector } from "react-redux";
import { add } from "date-fns";

import useChooseDateHandleChange from "../book-a-session-hooks/use-choose-date-handle-change";
import useGetRequestDateDataValues from "../book-a-session-hooks/use-get-request-date-data-values";

import { selectCurrentUser } from "../../../store/user/user.selector";
import {
  selectMorningSessionPrice,
  selectGetPricesError,
} from "../../../store/session-types-and-prices/session-types-and-prices.selector";

import DateErrors from "./date-errors.component";
import SpacesAvailableInfo from "./spaces-available-info.component";

import { Form, StyledInput, Label } from "../../../styles/form/form.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

import { priceMultipliedBy100 } from "../../../functions/price-multiplied-by-100";
import ErrorFetchingPrices from "./error-fetching-prices.component";

const ChooseDate = () => {
  const { date } = useGetRequestDateDataValues();
  const { chooseDateHandleChange } = useChooseDateHandleChange();

  const currentUser = useSelector(selectCurrentUser);
  const sessionPrice = useSelector(selectMorningSessionPrice);
  const error = useSelector(selectGetPricesError);

  const { walletBalance } = currentUser;

  const tomorrow = add(new Date(), {
    days: 1,
  });
  const tomorrowsDate = tomorrow.toISOString().split("T")[0];

  const shouldShowDatePicker = () => {
    return walletBalance &&
      walletBalance >= priceMultipliedBy100(sessionPrice) &&
      !error
      ? true
      : false;
  };

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
