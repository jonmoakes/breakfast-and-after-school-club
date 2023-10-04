import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useIsOnline from "../../hooks/use-is-online";
// import useGetUsersChildrenListener from "./child-info-hooks/use-get-users-children-listener";

import { selectBookedSessions } from "../../store/booked-sessions/booked-sessions.selector";
import { selectAllChildren } from "../../store/get-users-children/get-users-children.selector";

import { TABLE_COLUMNS } from "./table-columns";
import TableNoEntriesInfo from "../../components/tables/table-no-entries-info.component";
import DefaultTable from "../../components/tables/default-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TableCheckBox from "../../components/tables/table-checkbox";
import EditRemoveButtons from "../child-info/edit-remove-buttons.component";
import { getAllChildrenAsync } from "../../store/get-users-children/get-users-children-slice";
import { StyledTextArea } from "../../styles/form/form.styles";

const BookingsTable = () => {
  // useGetUsersChildrenListener();
  const { isOnline } = useIsOnline();

  let bookedSessions = useSelector(selectBookedSessions);
  const searchResult = useSelector(selectAllChildren);
  const dispatch = useDispatch();

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(
    () => (bookedSessions !== undefined ? bookedSessions : []),
    [bookedSessions]
  );
  const initialState = useMemo(
    () => ({ sortBy: [{ id: "date", desc: false }], pageSize: 30 }),
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

  // console.log(chosenEntry);

  const childrensName = chosenEntry.length
    ? chosenEntry[0].childrensName
    : null;

  const testFunction = () => {
    dispatch(getAllChildrenAsync({ childrensName }));
  };

  return (
    <>
      {!isOnline ? <NetworkError /> : null}

      {<TableNoEntriesInfo {...{ data }} />}

      {chosenEntry.length === 1 ? (
        <button onClick={testFunction}>test</button>
      ) : null}

      {searchResult.length
        ? searchResult.map((result) => (
            <>
              <p>{result.childName}</p>
              <p>{result.age}</p>
              <p>{result.dietryRequirements}</p>
              <p>{result.medicalInfo}</p>
              <StyledTextArea readOnly>{result.additionalInfo}</StyledTextArea>
            </>
          ))
        : null}
      {/* <EditRemoveButtons {...{ chosenEntry }} /> */}

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

export default BookingsTable;
