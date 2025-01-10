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

                  return (
                    <td key={cellKey} {...restCellProps}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

        {/* <tbody {...getTableBodyProps()}>
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
        </tbody> */}
      </TableWithStyle>
    </TableDiv>
  );
};
export default DefaultTable;
