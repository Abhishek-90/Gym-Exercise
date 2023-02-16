import { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import fetchData, { exerciseOption } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

function SearchExercises() {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function searchBodyParts() {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOption
      );

      setBodyParts(["all", ...bodyPartsData]);
    }
    searchBodyParts();
  }, []);

  async function handleSearch() {
    if (search) {
      const exerciseResponse = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOption
      );

      const searchedExercise = exerciseResponse.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercise);
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
      <Box sx={{ position: "relative", p: "20px", width: "100%" }}>
        <HorizontalScrollBar data={bodyParts} />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
