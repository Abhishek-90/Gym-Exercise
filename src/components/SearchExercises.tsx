import { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import fetchData, { exerciseOption } from "../utils/fetchData";

function SearchExercises() {
  const [search, setSearch] = useState<string>("");

  async function handleSearch() {
    if (search) {
      const exerciseResponse = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOption
      );
      console.log(exerciseResponse);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", sm: "30px" },
          textAlign: "center",
          mb: "50px",
        }}
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            height: "76px",
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          variant="contained"
          onClick={handleSearch}
          sx={{
            position: "absolute",
            right: "0",
            backgroundColor: "#ff2625",
            height: "56px",
            textTransform: "none",
            color: "#fff",
            fontSize: {
              lg: "20px",
              sm: "14px",
            },
            width: {
              lg: "175px",
              xs: "80px",
            },
            ":hover": {
              backgroundColor: "#ff2625",
              color: "#fff",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;
