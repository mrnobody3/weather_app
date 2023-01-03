import { Box, CircularProgress, Container } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { fetchCountryList } from "../../../services/api/GetData";
import QueryList from "../../../components/QueryList";
import SearchInput from "../../../components/SearchInput";

const SearchForm: React.FC = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error | string>(null);
  const [q, setQ] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setQ(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      setError(null);
      if (!q) {
        setList([]);
        return;
      }
      try {
        setIsLoading(true);
        const data = await fetchCountryList(q);
        setList(data);
      } catch (e: unknown) {
        if (typeof e === "string") {
          setError(e.toUpperCase());
        } else if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [q]);

  const handleClear = () => {
    setQ("");
  };

  return (
    <Box
      sx={{
        bgcolor: "gray",
        position: "relative",
      }}
    >
      <Container
        sx={{
          bgcolor: "gray",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <SearchInput onChange={handleChange} value={q} onClear={handleClear} />
        {isLoading && (
          <Box sx={{ position: "absolute", top: "0", right: "570px" }}>
            <CircularProgress />
          </Box>
        )}
        {error && <div>Whoops. Somethings wrong!</div>}
        {list.length !== 0 && <QueryList data={list} onClear={handleClear} />}
      </Container>
    </Box>
  );
};

export default SearchForm;
