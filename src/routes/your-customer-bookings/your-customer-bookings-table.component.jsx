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
import useGetBookedSessionsListener from "./your-customer-bookings-hooks/use-get-booked-sessions-listener";

import {
  selectShowAllDates,
  selectBookedSessionWithFormattedDate,
} from "../../store/booked-sessions/booked-sessions.slice";

import { TABLE_COLUMNS } from "./table-columns";
import NetworkError from "../../components/errors/network-error.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import GetChildDetailsButton from "./get-child-details-button.component";
import NoBookingDataFound from "./no-booking-data.found.component";
import BookingsTableRenderTable from "../../components/tables/bookings-table-render-table.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import ToggleBookingsShownButton from "./toggle-bookings-show-button.component";
import BookingsTablePagination from "../../components/tables/bookings-table-pagination.component";

const YourCustomerBookingsTable = () => {
  useGetBookedSessionsListener();
  const { isOnline } = useIsOnline();

  const bookedSessions = useSelector(selectBookedSessionWithFormattedDate);
  const showAllDates = useSelector(selectShowAllDates);

  let sortedBookings = bookedSessions.sort((bookingA, bookingB) => {
    const dateA = new Date(bookingA.date);
    const dateB = new Date(bookingB.date);

    return dateA - dateB;
  });

  const columns = useMemo(() => TABLE_COLUMNS, []);

  const data = useMemo(
    () =>
      !showAllDates
        ? sortedBookings.filter((row) => {
            const rowDate = row.date;
            const formattedTodaysDate = format(new Date(), "yyyy-MM-dd");
            return rowDate === formattedTodaysDate;
          })
        : sortedBookings,
    [sortedBookings, showAllDates]
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
  sortedBookings = chosenEntry;

  return (
    <>
      {!isOnline ? <NetworkError /> : null}

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

      <ToggleBookingsShownButton {...{ sortedBookings, data }} />

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
  );
};

export default YourCustomerBookingsTable;
