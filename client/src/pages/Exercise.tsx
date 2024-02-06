import { useState, useEffect } from "react";
import httpCommon from "../Api/http-common";
import { Typography, Paper, Box, Button, Grid } from "@mui/material";
import ExerciseCard from "../componets/ExersiseCard";

interface ExerciseData {
  id: number;
  name: string;
}

const Exercise = () => {
  const [data, setdata] = useState<ExerciseData[] | null>(null);
  const [muscle, setmuscledata] = useState("");

  const searchExercise = () => {
    setmuscledata(muscle.toLowerCase());
    alert("value is " + muscle);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpCommon.get(`+${muscle}`);
        setdata(response.data);
        console.log(response);
      } catch (error) {
        console.log("api error", error);
      }
    };
    fetchData();
  }, [muscle]);

  return (
    <>
      <Paper>
        <Typography variant="h1">Exersise</Typography>
        <Typography textAlign={"center"} variant="h3">
          select musle group u want to target
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <form action="get">
            <input
              type="search"
              onChange={(event) => {
                setmuscledata(event.target.value);
              }}
              placeholder="text"
              required
            />
            <Button onClick={searchExercise}>search exercise</Button>
          </form>
        </Box>
        {data && (
          <div>
            <Grid container spacing={2}>
              {data.map((exercise: any) => (
                <Grid item key={exercise.id} xs={12} sm={6} md={4} lg={3}>
                  <ExerciseCard
                    name={exercise.name}
                    instructions={exercise.instructions}
                    type={exercise.type}
                    equipment={exercise.equipment}
                    difficulty={exercise.difficulty}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Paper>
    </>
  );
};

export default Exercise;
