import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <>
      <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
        <Typography variant="h4" mb="33px">
          Watch{" "}
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            {name}
          </span>{" "}
          exercise videos
        </Typography>
        {exerciseVideos.length > 0 ? (
          <Stack
            alignItems="center"
            flexWrap="wrap"
            justifyContent="center"
            sx={{
              flexDirection: { lg: "row" },
              gap: { lg: "60px", xs: 0 },
            }}
          >
            {exerciseVideos.slice(0, 3).map((item, index) => {
              return (
                <a
                  key={index}
                  className="exercise-video"
                  href={`https://www.youtube.com/watch?v=${item.video?.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item.video?.thumbnails[0].url}
                    alt={item.video?.title}
                  />
                  <Box>
                    <Typography variant="h5" color="#000">
                      {item.video?.title}
                    </Typography>
                    <Typography variant="h6" color="#000">
                      {item.video?.channelName}
                    </Typography>
                  </Box>
                </a>
              );
            })}
          </Stack>
        ) : (
          <Loader />
        )}
      </Box>
    </>
  );
};

export default ExerciseVideos;
