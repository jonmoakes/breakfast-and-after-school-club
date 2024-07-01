import { useEffect, useState } from "react";
import useIncomeVariables from "./use-income-variables";
import { getISOWeek } from "date-fns";

const useFilterByWeekUseEffect = (weekNumber) => {
  const { data } = useIncomeVariables();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filterByWeek = () => {
      const filtered = data.filter(
        (entry) =>
          getISOWeek(entry.createdAsDateObjectForSorting) ===
          parseInt(weekNumber, 10)
      );
      setFilteredData(filtered);
    };

    if (weekNumber) {
      filterByWeek(weekNumber);
    } else {
      setFilteredData(data); // Reset to original data if weekNumber is empty
    }
  }, [weekNumber, data]);

  return { filteredData };
};

export default useFilterByWeekUseEffect;
