import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        alignItems="center"
        flexWrap="wrap"
        justifyContent="flex-start"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: 0 },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((video, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={video.video.thumbnails[0].url} alt={video.video.title} />
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
