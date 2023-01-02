import { Box, IconButton, InputBase } from "@mui/material";
import React, { ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface ISearchInput {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value: string;
  onClear: () => void;
}

const SearchInput: React.FC<ISearchInput> = ({ onChange, value, onClear }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <InputBase
        sx={{ ml: 1, flex: 1, width: "250px" }}
        placeholder="Search your weather"
        inputProps={{ "aria-label": "search weather" }}
        value={value}
        onChange={onChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onClear}
      >
        {value ? <ClearIcon /> : <SearchIcon />}
      </IconButton>
    </Box>
  );
};

export default SearchInput;
