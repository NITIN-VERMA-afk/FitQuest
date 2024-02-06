import { useState, useEffect } from "react";
import httpCommon from "../Api/http-common";
import { Typography, Paper, Box, Grid } from "@mui/material";
import ExerciseCard from "../componets/ExersiseCard";

interface ExerciseData {
  id: number;
  name: string;
  instructions: string;
  type: string;
  equipment: string;
  difficulty: string;
}

const Exercise = () => {
  const [data, setData] = useState<ExerciseData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpCommon.get(+`biceps`);
        setData(response.data);
        console.log(setData);
      } catch (error) {
        console.log(`api error:`, error);
      }
    };
    fetchData();
  }, []);

  return (
    <Paper>
      <Typography variant="h1">Exercise</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      ></Box>
      {data && (
        <Grid container spacing={2}>
          {data.map((exercise: ExerciseData) => (
            <Grid item key={exercise.id} xs={12} sm={6} md={4} lg={3}>
              <ExerciseCard
                key={exercise.id}
                name={exercise.name}
                type={exercise.type}
                instructions={exercise.instructions}
                equipment={exercise.equipment}
                difficulty={exercise.difficulty}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Paper>
  );
};

export default Exercise;
