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
import useGetUsersChildrenListener from "./child-info-hooks/use-get-users-children-listener";

import useGetUsersChildrenSelectors from "../../hooks/get-selectors/use-get-users-children-selectors";

import { TABLE_COLUMNS } from "./table-columns";
import TableNoEntriesInfo from "../../components/tables/table-no-entries-info.component";
import DefaultTable from "../../components/tables/default-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import EditRemoveButtons from "./edit-remove-buttons.component";

const ChildTable = () => {
  useGetUsersChildrenListener();
  const { isOnline } = useIsOnline();

  let { usersChildren } = useGetUsersChildrenSelectors();

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(
    () => (usersChildren !== undefined ? usersChildren : []),
    [usersChildren]
  );
  const initialState = useMemo(
    () => ({ sortBy: [{ id: "childName", desc: false }], pageSize: 10 }),
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
  usersChildren = chosenEntry;

  return (
    <>
      {!isOnline ? <NetworkError /> : null}

      {<TableNoEntriesInfo {...{ data }} />}

      <EditRemoveButtons {...{ chosenEntry }} />

      {data.length ? (
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
      ) : null}
    </>
  );
};

export default ChildTable;
