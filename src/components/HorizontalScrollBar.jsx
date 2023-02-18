import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import LeftArrowImage from "../assets/icons/left-arrow.png";
import RightArrowImage from "../assets/icons/right-arrow.png";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowImage} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowImage} alt="right-arrow" />
    </Typography>
  );
};

function HorizontalScrollBar({ data, bodyPart, setBodyPart, isBodyPart }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          title={item.id || item}
          itemID={item.id || item}
          m="0 40px"
        >
          {isBodyPart && (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          )}
          {!isBodyPart && <ExerciseCard exercise={item} />}
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollBar;
