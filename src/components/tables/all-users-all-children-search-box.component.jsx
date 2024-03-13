import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { useLocation } from "react-router-dom";

import Loader from "../../components/loader/loader.component";
import NoSearchResult from "../../components/tables/no-search-result.component";

import { ClearSearchButton } from "../../styles/buttons/buttons.styles";
import { TableSearchDiv } from "../../styles/div/div.styles";
import { SearchInput } from "../../styles/form/form.styles";
import { allUsersRoute } from "../../strings/routes/routes-strings";

const AllUsersAllChildrenSearchBox = ({
  rows,
  data,
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter);
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
        <TableSearchDiv className="all-users-all-children">
          <SearchInput
            type="search"
            placeholder={
              path === allUsersRoute ? "Search Users" : "Search Children"
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

export default AllUsersAllChildrenSearchBox;
