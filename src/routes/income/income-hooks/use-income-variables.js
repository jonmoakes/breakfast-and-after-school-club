import { useMemo } from "react";

import { INCOME_TABLE_COLUMNS } from "../income-table-columns";

import { defaultTableSize } from "../../../components/tables/default-table-size";
import useGetIncomeDataSelectors from "../../../hooks/get-selectors/use-get-income-data-selectors";

const useIncomeVariables = () => {
  const { incomeDataIsLoading, sortedIncomeData, incomeDataError } =
    useGetIncomeDataSelectors();

  const incomeDataPageSizeFromLocalStorage = localStorage.getItem(
    "incomeDataTablePageSize"
  );
  const data = useMemo(
    () => (sortedIncomeData && sortedIncomeData.length ? sortedIncomeData : []),
    [sortedIncomeData]
  );
  const columns = useMemo(() => INCOME_TABLE_COLUMNS, []);

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "createdAsDateObjectForSorting", desc: true }],
      pageSize: incomeDataPageSizeFromLocalStorage
        ? Number(incomeDataPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [incomeDataPageSizeFromLocalStorage]
  );

  return {
    incomeDataIsLoading,
    sortedIncomeData,
    incomeDataError,
    columns,
    initialState,
    data,
  };
};

export default useIncomeVariables;
