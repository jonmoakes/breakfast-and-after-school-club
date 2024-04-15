import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useAllUsersListener from "./all-users-hooks/use-all-users-listener";
import useIsOnline from "../../hooks/use-is-online";
import useGetAllUsersSelectors from "../../hooks/get-selectors/use-get-all-users-selectors";

import { TABLE_COLUMNS } from "./table-columns";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoUsersFound from "./no-users-found.component";
import DefaultTable from "../../components/tables/default-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import AllUsersAllChildrenSearchBox from "../../components/tables/all-users-all-children-search-box.component";

import { defaultTableSize } from "../../components/tables/default-table-size";

const AllUsersTable = () => {
  useAllUsersListener();
  const { isOnline } = useIsOnline();

  let { allUserWithFormattedCreatedAt } = useGetAllUsersSelectors();
  const { getAllUsersError } = useGetAllUsersSelectors();

  const allUsersPageSizeFromLocalStorage = localStorage.getItem(
    "allUsersChosenTablePageSize"
  );

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(
    () =>
      allUserWithFormattedCreatedAt !== undefined
        ? allUserWithFormattedCreatedAt
        : [],
    [allUserWithFormattedCreatedAt]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "name", desc: false }],
      pageSize: allUsersPageSizeFromLocalStorage
        ? Number(allUsersPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [allUsersPageSizeFromLocalStorage]
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
        return [...columns];
      });
    }
  );
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : getAllUsersError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <NoUsersFound {...{ data }} />

          <AllUsersAllChildrenSearchBox
            {...{
              rows,
              data,
              globalFilter,
              setGlobalFilter,
            }}
          />

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

export default AllUsersTable;
