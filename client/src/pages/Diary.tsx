import { Typography, Paper, Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import NotesIcon from "@mui/icons-material/Notes";
import { useState } from "react";
import Todoitem from "../componets/Todoitem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Diary = () => {
  const [text, setText] = useState<string>("");
  const [breakfastTasks, setBreakfastTasks] = useState<Task[]>([]);
  const [lunchTasks, setLunchTasks] = useState<Task[]>([]);
  const [dinnerTasks, setDinnerTasks] = useState<Task[]>([]);
  const [snacksTasks, setSnacksTasks] = useState<Task[]>([]);
  const [exerciseTasks, setExerciseTasks] = useState<Task[]>([]);
  const [waterTasks, setWaterTasks] = useState<Task[]>([]);

  const addTask = (text: string, setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setText("");
  };

  const deleteTask = (id: number, setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (
    id: number,
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <>
      <Paper>
        <Typography textAlign={"center"} variant="h4">
          Diary
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <Button>
            <ArrowBackIosNewIcon />
          </Button>

          <Typography> Today</Typography>
          <Button>
            <ArrowForwardIosIcon />
          </Button>
        </Box>
        <Box>
          <Typography>Calories Remaining </Typography>
          <Typography>1,810</Typography>
        </Box>

        <Box
          sx={{
            marginTop: "12px",
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <Box>
            <Typography>Breakfast</Typography>
            <Box>
              {breakfastTasks.map((task) => (
                <Todoitem
                  key={task.id}
                  task={task}
                  deleteTask={() => deleteTask(task.id, setBreakfastTasks)}
                  toggleComplete={() => toggleComplete(task.id, setBreakfastTasks)}
                />
              ))}
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask(text, setBreakfastTasks);
                }}
              />
              <Button onClick={() => addTask(text, setBreakfastTasks)}>
                ADD Food<AddIcon/>
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography>Lunch</Typography>
            <Box>
              {lunchTasks.map((task) => (
                <Todoitem
                  key={task.id}
                  task={task}
                  deleteTask={() => deleteTask(task.id, setLunchTasks)}
                  toggleComplete={() => toggleComplete(task.id, setLunchTasks)}
                />
              ))}
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask(text, setLunchTasks);
                }}
              />
              <Button onClick={() => addTask(text, setLunchTasks)}>
                ADD Food<AddIcon />
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography>Dinner</Typography>
            <Box>
              {dinnerTasks.map((task) => (
                <Todoitem
                  key={task.id}
                  task={task}
                  deleteTask={() => deleteTask(task.id, setDinnerTasks)}
                  toggleComplete={() => toggleComplete(task.id, setDinnerTasks)}
                />
              ))}
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask(text, setDinnerTasks);
                }}
              />
              <Button onClick={() => addTask(text, setDinnerTasks)}>
                ADD Food <AddIcon />
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography>Snacks</Typography>
            <Box>
              {snacksTasks.map((task) => (
                <Todoitem
                  key={task.id}
                  task={task}
                  deleteTask={() => deleteTask(task.id, setSnacksTasks)}
                  toggleComplete={() => toggleComplete(task.id, setSnacksTasks)}
                />
              ))}
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask(text, setSnacksTasks);
                }}
              />
              <Button onClick={() => addTask(text, setSnacksTasks)}>
                ADD Food <AddIcon />
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography>Exercise</Typography>
            <Box>
              {exerciseTasks.map((task) => (
                <Todoitem
                  key={task.id}
                  task={task}
                  deleteTask={() => deleteTask(task.id,setExerciseTasks)}
                  toggleComplete={() => toggleComplete(task.id, setExerciseTasks)}
                />
              ))}
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask(text, setExerciseTasks);
                }}
              />
              <Button onClick={() => addTask(text, setExerciseTasks)}>
                ADD EXercise <AddIcon />
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography>Water</Typography>
            <Box>
              {waterTasks.map((task) => (
                <Todoitem
                  key={task.id}
                  task={task}
                  deleteTask={() => deleteTask(task.id, setWaterTasks)}
                  toggleComplete={() => toggleComplete(task.id, setWaterTasks)}
                />
              ))}
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask(text, setWaterTasks);
                }}
              />
              <Button onClick={() => addTask(text, setWaterTasks)}>
                ADD water <AddIcon />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "4px",
          }}
        >
          <Button>
            <PieChartOutlineIcon /> Nutrition
          </Button>
          <Button>
            <TextSnippetIcon /> Notes
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2px",
          }}
        >
          <Button variant="contained">
            <NotesIcon /> Complete Diary
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Diary;



