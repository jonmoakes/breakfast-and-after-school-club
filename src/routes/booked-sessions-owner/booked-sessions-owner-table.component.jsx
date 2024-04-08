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
import useBookedSessionsOwnerListener from "./booked-sessions-owner-hooks/use-booked-sessions-owner-listener";
import useBookedSessionsOwnerVariables from "./booked-sessions-owner-hooks/use-booked-sessions-owner-variables";

import NetworkError from "../../components/errors/network-error.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import GetChildDetailsButton from "./get-child-details-button.component";
import NoBookingDataFound from "./no-booking-data.found.component";
import BookingsTableRenderTable from "../../components/tables/bookings-table-render-table.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import BookedSessionsOwnerToggleBookingsShownButton from "./booked-sessions-owner-toggle-bookings-show-button.component";
import TablePagination from "../../components/tables/table-pagination.component";

const BookedSessionsOwnerTable = () => {
  useBookedSessionsOwnerListener();
  const { bookedSessionsOwnerError, data, columns, initialState } =
    useBookedSessionsOwnerVariables();
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
            Cell: ({ row }) => {
              return <TableCheckBox {...row.getToggleRowSelectedProps()} />;
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

          <BookedSessionsOwnerToggleBookingsShownButton
            {...{ chosenEntry, data }}
          />

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
