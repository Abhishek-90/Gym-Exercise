import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import fetchData, { exerciseOption } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const EXERCISE_PER_PAGE = 9;
function Exercises({ exercises, bodyPart, setExercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastExercise = currentPage * EXERCISE_PER_PAGE;
  const indexOfFirstExercise = indexOfLastExercise - EXERCISE_PER_PAGE;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOption
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOption
        );
      }

      setExercises(exerciseData);
    };

    fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            defaultPage={1}
            shape="rounded"
            count={Math.ceil(exercises.length / EXERCISE_PER_PAGE)}
            size="large"
            onChange={paginate}
            page={currentPage}
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
