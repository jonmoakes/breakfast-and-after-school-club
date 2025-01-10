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
import { BlackSpan } from "../../styles/span/span.styles";

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
    <TableDiv className={tableClassName}>
      <TableWithStyle {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps();
                  return (
                    <th key={key} {...restColumn}>
                      {column.render("Header")}
                      <BlackSpan>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ⬇️"
                            : " ⬆️"
                          : ""}
                      </BlackSpan>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            const { key: rowKey, ...restRowProps } = row.getRowProps();

            return (
              <tr key={rowKey} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key: cellKey, ...restCellProps } =
                    cell.getCellProps();
                  const getDay = format(
                    new Date(cell.row.original.date),
                    "EEEE"
                  );

                  if (getDay.includes("Monday")) {
                    return (
                      <MondayCell key={cellKey} {...restCellProps}>
                        {cell.render("Cell")}
                      </MondayCell>
                    );
                  } else if (getDay.includes("Tuesday")) {
                    return (
                      <TuesdayCell key={cellKey} {...restCellProps}>
                        {cell.render("Cell")}
                      </TuesdayCell>
                    );
                  } else if (getDay.includes("Wednesday")) {
                    return (
                      <WednesdayCell key={cellKey} {...restCellProps}>
                        {cell.render("Cell")}
                      </WednesdayCell>
                    );
                  } else if (getDay.includes("Thursday")) {
                    return (
                      <ThursdayCell key={cellKey} {...restCellProps}>
                        {cell.render("Cell")}
                      </ThursdayCell>
                    );
                  } else if (getDay.includes("Friday")) {
                    return (
                      <FridayCell key={cellKey} {...restCellProps}>
                        {cell.render("Cell")}
                      </FridayCell>
                    );
                  } else {
                    return (
                      <td key={cellKey} {...restCellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </TableWithStyle>
    </TableDiv>
  );
};
export default BookingsTableRenderTable;
