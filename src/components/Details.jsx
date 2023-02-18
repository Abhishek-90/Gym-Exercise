import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Details = ({ exerciseDetail }) => {
  const { name, gifUrl, target, equipment, bodyPart } = exerciseDetail;
  const extraDetails = [
    {
      image: BodyPartImage,
      name: bodyPart,
    },
    {
      image: TargetImage,
      name: target,
    },
    {
      image: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, alignItems: "center", p: "20px" }}
    >
      <img className="detail-image" src={gifUrl} alt={name} loading="lazy" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercise keep you strong. <b>{name}</b> is one of the best exercises
          to target your <b>{target}</b>. It will help you improve your mood and
          energy.
        </Typography>
        {extraDetails.map(({ image, name }, index) => {
          return (
            <Stack
              key={index}
              direction="row"
              ml="22px"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img src={image} alt={name} width="50px" height="50px" />
              </Button>
              <Typography variant="h5" textTransform="capitalize">
                {name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Details;
