import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useBookedSessionsUserVariables from "./booked-sessions-user-hooks/use-booked-sessions-user-variables";
import useBookedSessionsUserFunctions from "./booked-sessions-user-hooks/use-booked-sessions-user-functions";
import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import NoUpcomingBookingsFound from "./no-upcoming-bookings-found.component";
import NoBookingsHaveBeenMadeYet from "./no-bookings-have-been-made-yet.component";
import BookingsTableRenderTable from "../../components/tables/bookings-table-render-table.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import TablePagination from "../../components/tables/table-pagination.component";
import CancelBookingAndDownloadPdfButtons from "./cancel-booking-and-download-pdf-buttons.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import BookedSessionsUserToggleBookingsShownButton from "./booked-sessions-user-toggle-bookings-show-button.component";

const BookedSessionsUserTable = () => {
  const { data, columns, initialState, bookedSessionsUserError } =
    useBookedSessionsUserVariables();
  const { scrollToTop } = useBookedSessionsUserFunctions();
  const { isOnline } = useIsOnline();

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
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <TableCheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => {
              return (
                <TableCheckBox
                  onClick={scrollToTop}
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

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : bookedSessionsUserError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <NoBookingsHaveBeenMadeYet />
          <NoUpcomingBookingsFound />

          <TableSearchBox
            {...{
              chosenEntry,
              rows,
              data,
              globalFilter,
              setGlobalFilter,
            }}
          />

          <BookedSessionsUserToggleBookingsShownButton {...{ chosenEntry }} />

          <CancelBookingAndDownloadPdfButtons {...{ chosenEntry }} />

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

export default BookedSessionsUserTable;
