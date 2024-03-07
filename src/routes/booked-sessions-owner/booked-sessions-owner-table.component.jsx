import { useMemo } from "react";
import { useSelector } from "react-redux";
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

import { selectBookedSessionsOwnerSelectors } from "../../store/booked-sessions-owner/booked-sessions-owner.slice";

import { TABLE_COLUMNS } from "./table-columns";
import NetworkError from "../../components/errors/network-error.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import GetChildDetailsButton from "./get-child-details-button.component";
import NoBookingDataFound from "./no-booking-data.found.component";
import BookingsTableRenderTable from "../../components/tables/bookings-table-render-table.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import ToggleBookingsShownButton from "./toggle-bookings-show-button.component";
import BookingsTablePagination from "../../components/tables/bookings-table-pagination.component";

const BookedSessionsOwnerTable = () => {
  useBookedSessionsOwnerListener();

  const { isOnline } = useIsOnline();

  const { showAllDates, bookedSessionsOwnerError } = useSelector(
    selectBookedSessionsOwnerSelectors
  );
  let { sortedOwnerBookings } = useSelector(selectBookedSessionsOwnerSelectors);

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

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

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

          <ToggleBookingsShownButton {...{ sortedOwnerBookings, data }} />

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

              <BookingsTablePagination
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
