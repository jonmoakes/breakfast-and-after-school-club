import { StyledInput } from "../../styles/form/form.styles";

const WeekFilterInput = ({ weekNumber, handleWeekFilterChange }) => (
  <>
    <StyledInput
      className="week-filter"
      type="text"
      value={weekNumber || ""}
      placeholder="filter by week number"
      onChange={(event) => handleWeekFilterChange(event.target.value)}
    />
  </>
);

export default WeekFilterInput;
