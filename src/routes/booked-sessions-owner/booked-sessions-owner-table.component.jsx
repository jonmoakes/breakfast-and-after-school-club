import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";
import { format } from "date-fns";

import useIsOnline from "../../hooks/use-is-online";
import useBookedSessionsOwnerListener from "./booked-sessions-owner-hooks/use-booked-sessions-owner-listener";
import useGetBookedSessionsOwnerSelectors from "../../hooks/get-selectors/use-get-booked-sessions-owner-selectors";

import { TABLE_COLUMNS } from "./table-columns";
import NetworkError from "../../components/errors/network-error.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import GetChildDetailsButton from "./get-child-details-button.component";
import NoBookingDataFound from "./no-booking-data.found.component";
import BookingsTableRenderTable from "../../components/tables/bookings-table-render-table.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import ToggleBookingsShownButton from "./toggle-bookings-show-button.component";
import TablePagination from "../../components/tables/table-pagination.component";

import { scrollToTop } from "../../functions/scroll-top-top";

const BookedSessionsOwnerTable = () => {
  useBookedSessionsOwnerListener();

  const { isOnline } = useIsOnline();

  const { showAllDates, bookedSessionsOwnerError } =
    useGetBookedSessionsOwnerSelectors();
  let { sortedOwnerBookings } = useGetBookedSessionsOwnerSelectors();

  const columns = useMemo(() => TABLE_COLUMNS, []);

  const data = useMemo(
    () =>
      !showAllDates
        ? sortedOwnerBookings.filter((row) => {
            const rowDate = row.date;
            const formattedTodaysDate = format(new Date(), "yyyy-MM-dd");
            return rowDate === formattedTodaysDate;
          })
        : sortedOwnerBookings,
    [sortedOwnerBookings, showAllDates]
  );

  const initialState = useMemo(
    () => ({ sortBy: [{ id: "date", desc: true }], pageSize: 30 }),
    []
  );

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
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    useColumnOrder,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            Cell: ({ row }) => {
              return (
                <TableCheckBox
                  onClick={() => scrollToTop()}
                  {...row.getToggleRowSelectedProps()}
                />
              );
            },
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const chosenEntry = selectedFlatRows.map((row) => row.original);
  sortedOwnerBookings = chosenEntry;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : bookedSessionsOwnerError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <NoBookingDataFound {...{ data }} />

          <TableSearchBox
            {...{
              chosenEntry,
              rows,
              data,
              globalFilter,
              setGlobalFilter,
            }}
          />

          <ToggleBookingsShownButton {...{ data }} />

          <GetChildDetailsButton {...{ chosenEntry }} />

          {data.length ? (
            <>
              <BookingsTableRenderTable
                {...{
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

export default BookedSessionsOwnerTable;
