import useChooseDateHandleChange from "../book-a-session-hooks/use-choose-date-handle-change";
import useGetDataValues from "../book-a-session-hooks/use-date-data-values";

import { Form, StyledInput, Label } from "../../../styles/form/form.styles";

import { tomorrow } from "../../../functions/get-future-dates";

const ChooseDate = () => {
  const { chooseDateHandleChange } = useChooseDateHandleChange();
  const { date } = useGetDataValues();

  const tomorrowsDate = tomorrow.toISOString().split("T")[0];

  return (
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
  );
};

export default ChooseDate;
