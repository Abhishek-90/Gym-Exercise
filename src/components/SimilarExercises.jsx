import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({
  similarTargetExercise,
  similarEquipmentExercise,
}) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" }, p: "20px" }}>
      <Typography variant="h4">
        Exercises that target same muscle group
      </Typography>
      <Stack
        gap="70px"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          position: "relative",
          p: "20px",
          mt: { lg: "50px", xs: "20px" },
          mb: { lg: "50px", xs: "20px" },
        }}
        direction="row"
      >
        {similarTargetExercise.length > 0 ? (
          <HorizontalScrollBar
            isBodyPart={false}
            data={similarTargetExercise}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4">Exercises that use same Equipments</Typography>
      <Stack
        gap="70px"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          position: "relative",
          p: "20px",
          mt: { lg: "50px", xs: "20px" },
          mb: { lg: "50px", xs: "20px" },
        }}
        direction="row"
      >
        {similarEquipmentExercise.length > 0 ? (
          <HorizontalScrollBar
            isBodyPart={false}
            data={similarEquipmentExercise}
          />
        ) : (
          <Loader></Loader>
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
