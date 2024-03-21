import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useIsOnline from "../../hooks/use-is-online";

import { TABLE_COLUMNS } from "./table-columns";
import NetworkError from "../../components/errors/network-error.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import NoBookingsFound from "./no-bookings-found.component";
import BookingsTableRenderTable from "../../components/tables/bookings-table-render-table.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import TablePagination from "../../components/tables/table-pagination.component";
import CancelBookingAndDownloadPdfButtons from "./cancel-booking-and-download-pdf-buttons.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import useGetBookedSessionsUserSelectors from "../../hooks/get-selectors/use-get-booked-sessions-user-selectors";
import useBookedSessionsUserLogic from "./booked-sessions-user-hooks/logic/use-booked-sessions-user-logic";
import useSetDateAndTime from "../../hooks/use-set-date-and-time";

const BookedSessionsUserTable = () => {
  const { isOnline } = useIsOnline();
  const { scrollToTop, milliseconds } = useBookedSessionsUserLogic();
  const { bookedSessionsUserError } = useGetBookedSessionsUserSelectors();
  let { sortedUserBookings } = useGetBookedSessionsUserSelectors();
  useSetDateAndTime(milliseconds);

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(() => sortedUserBookings, [sortedUserBookings]);

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
  sortedUserBookings = chosenEntry;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : bookedSessionsUserError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <NoBookingsFound {...{ data }} />

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

export default BookedSessionsUserTable;
