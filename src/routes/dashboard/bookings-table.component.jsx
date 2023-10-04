import { useMemo, useState } from "react";
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
import useGetBookedSessionsListener from "./dashboard-hooks/use-get-booked-sessions-listener";

import { selectBookedSessions } from "../../store/booked-sessions/booked-sessions.selector";

import { TABLE_COLUMNS } from "./table-columns";
import NetworkError from "../../components/errors/network-error.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import GetChildDetailsButton from "./get-child-details-button.component";
import NoBookingDataFound from "./no-booking-data.found.component";
import FilterButton from "./filter-button.component";
import BookingsTableRenderTable from "./bookings-table-render-table.component";

const BookingsTable = () => {
  useGetBookedSessionsListener();
  const { isOnline } = useIsOnline();
  const [showAllDates, setShowAllDates] = useState(false);

  let bookedSessions = useSelector(selectBookedSessions);

  const columns = useMemo(() => TABLE_COLUMNS, []);

  const data = useMemo(
    () =>
      !showAllDates
        ? bookedSessions.filter((row) => {
            const rowDate = row.date;
            const formattedTodaysDate = format(new Date(), "yyyy-MM-dd");
            return rowDate === formattedTodaysDate;
          })
        : bookedSessions,
    [bookedSessions, showAllDates]
  );

  // const data = useMemo(
  //   () => (bookedSessions !== undefined ? bookedSessions : []),
  //   [bookedSessions]
  // );
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
    prepareRow,
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

  const chosenEntry = selectedFlatRows.map((row) => row.original);
  bookedSessions = chosenEntry;

  return (
    <>
      {!isOnline ? <NetworkError /> : null}
      <FilterButton {...{ showAllDates, setShowAllDates }} />
      <NoBookingDataFound {...{ data }} />
      <GetChildDetailsButton {...{ chosenEntry }} />

      {data.length ? (
        <BookingsTableRenderTable
          {...{
            initialState,
            headerGroups,
            getTableProps,
            getTableBodyProps,
            page,
            prepareRow,
          }}
        />
      ) : null}
    </>
  );
};

export default BookingsTable;
