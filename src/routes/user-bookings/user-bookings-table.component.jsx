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

import useIsOnline from "../../hooks/use-is-online";

import { selectBookedSessionsUserSelectors } from "../../store/booked-sessions-user/booked-sessions-user.slice";

import { TABLE_COLUMNS } from "./table-columns";
import NetworkError from "../../components/errors/network-error.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import NoBookingsFound from "./no-bookings-found.component";
import BookingsTableRenderTable from "../../components/tables/bookings-table-render-table.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import BookingsTablePagination from "../../components/tables/bookings-table-pagination.component";
import CancelBookingButton from "./cancel-booking-button.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

const UserBookingsTable = () => {
  const { isOnline } = useIsOnline();

  const { bookedSessionsUserError } = useSelector(
    selectBookedSessionsUserSelectors
  );

  let { sortedUserBookings } = useSelector(selectBookedSessionsUserSelectors);

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(() => sortedUserBookings, [sortedUserBookings]);

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

          <CancelBookingButton {...{ chosenEntry }} />

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

export default UserBookingsTable;
