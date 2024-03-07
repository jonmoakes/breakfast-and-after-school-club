import { format } from "date-fns";
import { useLocation } from "react-router-dom";

import { TableDiv } from "../../styles/div/div.styles";
import {
  TableWithStyle,
  MondayCell,
  TuesdayCell,
  WednesdayCell,
  ThursdayCell,
  FridayCell,
} from "../../styles/tables/tables.styles";

import { bookedSessionsOwnerRoute } from "../../strings/routes/routes-strings";

const BookingsTableRenderTable = ({
  headerGroups,
  getTableProps,
  getTableBodyProps,
  page,
  prepareRow,
}) => {
  const location = useLocation();

  const tableClassName =
    location.pathname === bookedSessionsOwnerRoute ? "" : "user-bookings";

  return (
    <>
      <TableDiv className={tableClassName}>
        <TableWithStyle {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ⬇️"
                          : " ⬆️"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    const getDay = format(
                      new Date(cell.row.original.date),
                      "EEEE"
                    );
                    if (getDay.includes("Monday")) {
                      return (
                        <MondayCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </MondayCell>
                      );
                    } else if (getDay.includes("Tuesday")) {
                      return (
                        <TuesdayCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </TuesdayCell>
                      );
                    } else if (getDay.includes("Wednesday")) {
                      return (
                        <WednesdayCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </WednesdayCell>
                      );
                    } else if (getDay.includes("Thursday")) {
                      return (
                        <ThursdayCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </ThursdayCell>
                      );
                    } else if (getDay.includes("Friday")) {
                      return (
                        <FridayCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </FridayCell>
                      );
                    } else {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </TableWithStyle>
      </TableDiv>
    </>
  );
};
export default BookingsTableRenderTable;
