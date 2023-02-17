import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "14px",
            background: "#ffa9a9",
            color: "#fff",
            borderRadius: "20px",
            ml: "21px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "14px",
            background: "#fcc757",
            color: "#fff",
            borderRadius: "20px",
            ml: "21px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        sx={{
          fontSize: "22px",
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "#000",
          ml: "21px",
          mt: "11px",
          pb: "10px",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
