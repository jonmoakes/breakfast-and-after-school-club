import { useLocation } from "react-router-dom";

import { PaginationDiv, PaginationTextDiv } from "../../styles/div/div.styles";
import { PaginationPageButton } from "../../styles/buttons/buttons.styles";
import { PaginationText } from "../../styles/p/p.styles";
import {
  PaginationInput,
  PaginationSelect,
} from "../../styles/form/form.styles";

import { defaultTableSize } from "../tables/default-table-size";
import {
  allChildrenRoute,
  allUsersRoute,
  bookedSessionsOwnerRoute,
  bookedSessionsUserRoute,
} from "../../strings/routes/routes-strings";

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
  const location = useLocation();
  const path = location.pathname;

  const setTablePageSizeBasedOnRoute = (selectedPageSize) => {
    switch (path) {
      case bookedSessionsUserRoute:
        localStorage.setItem(
          "bookedSessionsUserChosenTablePageSize",
          selectedPageSize
        );
        break;
      case bookedSessionsOwnerRoute:
        localStorage.setItem(
          "bookedSessionsOwnerChosenTablePageSize",
          selectedPageSize
        );
        break;
      case allChildrenRoute:
        localStorage.setItem(
          "allChildrenChosenTablePageSize",
          selectedPageSize
        );
        break;
      case allUsersRoute:
        localStorage.setItem("allUsersChosenTablePageSize", selectedPageSize);
        break;
      default:
        return;
    }
  };

  return (
    <>
      {data.length > defaultTableSize && rows.length ? (
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
                  const selectedPageSize = e.target.value;
                  setTablePageSizeBasedOnRoute(selectedPageSize);
                  setPageSize(Number(selectedPageSize));
                }}
              >
                {[5, 10, 20, defaultTableSize, 50, 75, 100, 150, 200].map(
                  (pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize} Rows
                    </option>
                  )
                )}
              </PaginationSelect>
            </PaginationTextDiv>
          </div>
        </PaginationDiv>
      ) : null}
    </>
  );
};

export default TablePagination;
