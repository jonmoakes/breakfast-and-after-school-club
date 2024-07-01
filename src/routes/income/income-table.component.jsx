import { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
  useFilters,
} from "react-table";
import { format, getISOWeek, parseISO } from "date-fns";

import useIsOnline from "../../hooks/use-is-online";

import { INCOME_TABLE_COLUMNS } from "./income-table-columns";
import SearchBoxWhenNoChosenEntry from "../../components/tables/search-box-when-no-chosen-entry.component";
import NoIncomeDataFound from "./no-income-data-found.component";
import DefaultTable from "../../components/tables/default-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";

import { AmountButtonDiv, ParentDiv } from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { defaultTableSize } from "../../components/tables/default-table-size";
import { Text } from "../../styles/p/p.styles";
import { BlueSpan } from "../../styles/span/span.styles";

const IncomeTable = ({ sortedIncomeData }) => {
  const { isOnline } = useIsOnline();

  const incomeDataPageSizeFromLocalStorage = localStorage.getItem(
    "incomeDataTablePageSize"
  );
  console.log("bo  ", sortedIncomeData);
  const data = useMemo(() => sortedIncomeData, [sortedIncomeData]);
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

  const [filteredData, setFilteredData] = useState(data);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    useColumnOrder,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [...columns];
      });
    }
  );

  const date = parseISO("2024-06-21");
  const weekNumber = getISOWeek(date);

  console.log(`Week number for 21st June 2024: ${weekNumber}`);
  const { globalFilter, pageIndex, pageSize } = state;
  const [value, setValue] = useState(globalFilter);
  // const [showWeekInput, setShowWeekInput] = useState(false);

  const filteredRows = rows.filter((row) => !row.filtered);

  // Filter function to filter data by week number
  const filterByWeek = (weekNumber) => {
    const filtered = data.filter(
      (item) => format(item.createdAsDateObjectForSorting, "w") === weekNumber
    );
    setFilteredData(filtered);
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    filteredRows.forEach((row) => {
      totalAmount += row.values.amount || 0; // Ensure to handle if amount is null or undefined
    });
    return totalAmount;
  };
  const totalAmount = calculateTotalAmount();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : (
        <>
          <NoIncomeDataFound {...{ data }} />
          <SearchBoxWhenNoChosenEntry
            {...{
              rows,
              data,
              globalFilter,
              setGlobalFilter,
              value,
              setValue,
            }}
          />
          {value && value.length && rows.length ? (
            <AmountButtonDiv>
              <ParentDiv className="amount bounce">
                <Text className="amount">
                  the total amount of all of the entries returned from the
                  search query{" "}
                  {value && filteredRows.length > initialState.pageSize
                    ? "( including those on the other pagination pages )"
                    : null}{" "}
                  is:
                  <br />
                  <BlueSpan>£{(totalAmount / 100).toFixed(2)}</BlueSpan>
                </Text>
              </ParentDiv>
            </AmountButtonDiv>
          ) : null}

          {/* <YellowGreenButton onClick={() => filterByWeek("25")}>
            Filter Week 25{" "}
          </YellowGreenButton> */}

          {/* {showWeekInput ? (
            <input
              type="text"
              onChange={(event) => filterByWeek(event.target.value)}
            />
          ) : null} */}

          {data.length ? (
            <>
              <DefaultTable
                {...{
                  initialState,
                  headerGroups,
                  getTableProps,
                  getTableBodyProps,
                  page,
                  prepareRow,
                }}
              />

              <TablePagination
                {...{
                  data,
                  rows,
                  pageIndex,
                  pageOptions,
                  gotoPage,
                  canPreviousPage,
                  previousPage,
                  nextPage,
                  canNextPage,
                  pageCount,
                  pageSize,
                  setPageSize,
                }}
              />
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default IncomeTable;
