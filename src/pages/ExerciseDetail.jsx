import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import fetchData, { exerciseOption, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideoData, setExerciseVideoData] = useState({});
  const [similarTargetExercise, setSimilarTargetExercise] = useState({});
  const [similarEquipmentExercise, setSimilarEquipmentExercise] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseDetail(exerciseData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseData?.name}`,
        youtubeOptions
      );
      setExerciseVideoData(exerciseVideoData.contents);

      const similarTargetExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseData?.target}`,
        exerciseOption
      );
      setSimilarTargetExercise(similarTargetExerciseData);

      const similarEquipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseData?.equipment}`,
        exerciseOption
      );
      setSimilarEquipmentExercise(similarEquipmentExerciseData);
    };
    fetchExerciseDetails();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideoData}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        similarTargetExercise={similarTargetExercise}
        similarEquipmentExercise={similarEquipmentExercise}
      />
    </Box>
  );
};

export default ExerciseDetail;
