import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      className="bodyPart-card"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behaviour: "smooth" });
      }}
    >
      <img
        src="/assets/icons/gym.png"
        alt="dumbbells"
        style={{ height: "40px", width: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
