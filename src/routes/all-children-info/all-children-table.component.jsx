import { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useAllChildrenListener from "./all-children-hooks/use-all-children-listener";
import useIsOnline from "../../hooks/use-is-online";

import useGetAllChildrenSelectors from "../../hooks/get-selectors/use-get-all-children-selectors";

import { TABLE_COLUMNS } from "./table-columns";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoChildrenFound from "./no-children-found.component";
import DefaultTable from "../../components/tables/default-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import SearchBoxWhenNoChosenEntry from "../../components/tables/search-box-when-no-chosen-entry.component";

import { defaultTableSize } from "../../components/tables/default-table-size";

const AllChildrenTable = () => {
  useAllChildrenListener();
  const { isOnline } = useIsOnline();

  let { allChildren } = useGetAllChildrenSelectors();
  const { getAllChildrenError } = useGetAllChildrenSelectors();

  const allChildrenPageSizeFromLocalStorage = localStorage.getItem(
    "allChildrenChosenTablePageSize"
  );

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(
    () => (allChildren !== undefined ? allChildren : []),
    [allChildren]
  );

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "childName", desc: false }],
      pageSize: allChildrenPageSizeFromLocalStorage
        ? Number(allChildrenPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [allChildrenPageSizeFromLocalStorage]
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
  const [value, setValue] = useState(globalFilter);

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : getAllChildrenError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <NoChildrenFound {...{ data }} />

          <SearchBoxWhenNoChosenEntry
            {...{
              rows,
              data,
              globalFilter,
              setGlobalFilter,
              value,
              setValue,
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

export default AllChildrenTable;
