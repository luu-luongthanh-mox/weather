import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { toast } from "react-toastify";

import { search } from "@stores/location";
import { getLocations } from "@stores/location/selector";
import { useDebounce } from "@hooks/useDebounce";
import { SearchResult } from "@models/SearchResult";
import { StateStatus } from "@models/State";

interface SearchLocationProps {
  onLocationChanged: (selected: SearchResult) => void;
}
export const SearchLocation: React.FC<SearchLocationProps> = ({
  onLocationChanged,
}) => {
  const { error, loading, searchResult } = useSelector(getLocations);
  const dispatch = useDispatch();

  if (error) {
    toast.error(error);
  }

  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    dispatch(search(debouncedSearchText));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchText]);

  const onSearchChange = (text: string) => {
    setSearchText(text);
  };

  const onSelected = (selected: SearchResult[]) => {
    onLocationChanged(selected[0]);
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search City</Form.Label>
        <AsyncTypeahead
          isLoading={loading === StateStatus.loading}
          onChange={onSelected}
          onSearch={onSearchChange}
          options={searchResult}
          clearButton={true}
          id="searchLocation"
        />
      </Form.Group>
    </Form>
  );
};
