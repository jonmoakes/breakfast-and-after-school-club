import { PaginationDiv, PaginationTextDiv } from "../../styles/div/div.styles";
import { PaginationPageButton } from "../../styles/buttons/buttons.styles";
import { PaginationText } from "../../styles/p/p.styles";
import {
  PaginationInput,
  PaginationSelect,
} from "../../styles/form/form.styles";

const TablePagination = ({
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
  data,
  rows,
}) => {
  return (
    <>
      {data.length > 30 && rows.length ? (
        <PaginationDiv>
          <div>
            <PaginationText>
              showing Page {pageIndex + 1} Of {pageOptions.length}
            </PaginationText>

            <PaginationPageButton
              onClick={() => {
                gotoPage(0);
              }}
              disabled={!canPreviousPage}
            >
              &#10094;&#10094;
            </PaginationPageButton>

            <PaginationPageButton
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              &#10094;
            </PaginationPageButton>
            <PaginationPageButton
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              &#10095;
            </PaginationPageButton>

            <PaginationPageButton
              onClick={() => {
                gotoPage(pageCount - 1);
              }}
              disabled={!canNextPage}
            >
              &#10095;&#10095;
            </PaginationPageButton>

            <PaginationTextDiv>
              <PaginationText>Or Go To Page: </PaginationText>
              <PaginationInput
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </PaginationTextDiv>

            <PaginationTextDiv>
              <PaginationText>choose row amount: </PaginationText>
              <PaginationSelect
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 25, 50, 75, 100, 150, 200].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize} Rows
                  </option>
                ))}
              </PaginationSelect>
            </PaginationTextDiv>
          </div>
        </PaginationDiv>
      ) : null}
    </>
  );
};

export default TablePagination;
