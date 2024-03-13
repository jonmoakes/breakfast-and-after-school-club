import { TableDiv } from "../../styles/div/div.styles";
import { TableWithStyle } from "../../styles/tables/tables.styles";
import { BlackSpan } from "../../styles/span/span.styles";

const DefaultTable = ({
  headerGroups,
  getTableProps,
  getTableBodyProps,
  page,
  prepareRow,
}) => {
  return (
    <TableDiv>
      <TableWithStyle {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <BlackSpan>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ⬇️"
                        : " ⬆️"
                      : ""}
                  </BlackSpan>
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableWithStyle>
    </TableDiv>
  );
};
export default DefaultTable;
