import { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";

function SearchExercises() {
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
          value=""
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
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
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
          }}
          variant="contained"
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;
