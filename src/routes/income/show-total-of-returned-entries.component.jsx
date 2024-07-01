import useIncomeFunctions from "./income-hooks/use-income-functions";

import { AmountButtonDiv, ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueSpan } from "../../styles/span/span.styles";
import { MinimalButton } from "../../styles/buttons/buttons.styles";

const ShowTotalOfReturnedEntries = ({
  value,
  rows,
  initialState,
  weekNumber,
  handleWeekFilterChange,
}) => {
  const {
    calculateTotalAmount,
    filteredRows,
    weekNumberEnteredAndtotalIsZero,
    searchHasValueAndHasReturnedRows,
  } = useIncomeFunctions();

  return (
    <>
      {weekNumberEnteredAndtotalIsZero(weekNumber, rows) ? (
        <ParentDiv className="clear-week">
          <Text>no entries found for this week number.</Text>
          <Text>
            please try another week number or tap the button below to clear it.
          </Text>
          <MinimalButton
            type="button"
            className="clear-week"
            onClick={() => handleWeekFilterChange("")}
          >
            clear week number
          </MinimalButton>
        </ParentDiv>
      ) : searchHasValueAndHasReturnedRows(value, rows) ? (
        <AmountButtonDiv>
          <ParentDiv className="amount bounce">
            <Text className="amount">
              the total amount for all of the entries returned{" "}
              {value && filteredRows(rows).length > initialState.pageSize
                ? "( including those on the other pagination pages )"
                : null}{" "}
              is:
              <br />
              <BlueSpan>
                £{(calculateTotalAmount(filteredRows(rows)) / 100).toFixed(2)}
              </BlueSpan>
            </Text>
          </ParentDiv>
        </AmountButtonDiv>
      ) : null}
    </>
  );
};

export default ShowTotalOfReturnedEntries;
