import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useIsOnline from "../../hooks/use-is-online";
import useBookedSessionsUserAllBookingsVariables from "./booked-sessions-user-all-bookings-hooks/use-booked-sessions-user-all-bookings-variables";
import useBookedSessionsUserFunctions from "../booked-sessions-user/booked-sessions-user-hooks/use-booked-sessions-user-functions";

import NetworkError from "../../components/errors/network-error.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import NoBookingDataFound from "./no-booking-data.found.component";
import BookingsTableRenderTable from "../../components/tables/bookings-table-render-table.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import TablePagination from "../../components/tables/table-pagination.component";
import CancelBookingAndDownloadPdfButtons from "../booked-sessions-user/cancel-booking-and-download-pdf-buttons.component";

const BookedSessionsUserAllBookingsTable = () => {
  const { bookedSessionsUserError, data, columns, initialState } =
    useBookedSessionsUserAllBookingsVariables();
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
    useFilters,
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
          <NoBookingDataFound />

          <TableSearchBox
            {...{
              chosenEntry,
              rows,
              data,
              globalFilter,
              setGlobalFilter,
            }}
          />

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

export default BookedSessionsUserAllBookingsTable;
