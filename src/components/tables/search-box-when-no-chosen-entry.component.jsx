import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { useLocation } from "react-router-dom";

import Loader from "../loader/loader.component";
import NoSearchResult from "./no-search-result.component";

import { ClearSearchButton } from "../../styles/buttons/buttons.styles";
import { TableSearchDiv } from "../../styles/div/div.styles";
import { SearchInput } from "../../styles/form/form.styles";

import {
  allChildrenRoute,
  allUsersRoute,
} from "../../strings/routes/routes-strings";
// This search box takes the value and setValue state from the tables that use it
// incomeDataTable needs it this way to display the total amount when searchbox has length.
// Rather than creating a separate searchbox with just one change, the method of setting the value
// Is given to the tables that use this searchbox instead.
const SearchBoxWhenNoChosenEntry = ({
  rows,
  data,
  setGlobalFilter,
  value,
  setValue,
}) => {
  const [isSearching, setIsSearching] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
    setIsSearching(false);
  }, 400);

  const clearSearch = () => {
    setValue("");
    setGlobalFilter(undefined);
  };

  return (
    <>
      {isSearching && <Loader />}
      {data.length ? (
        <TableSearchDiv className="no-checkbox">
          <SearchInput
            type="search"
            placeholder={
              path === allUsersRoute
                ? "Search Users"
                : path === allChildrenRoute
                ? "Search Children"
                : "Search Income"
            }
            onChange={(e) => {
              setIsSearching(true);
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            value={value || ""}
          />

          {value && value.length ? (
            <ClearSearchButton onClick={clearSearch}>x</ClearSearchButton>
          ) : null}
        </TableSearchDiv>
      ) : null}

      {value && !rows.length && data.length ? <NoSearchResult /> : null}
    </>
  );
};

export default SearchBoxWhenNoChosenEntry;
