import { Typography, Paper, Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import NotesIcon from "@mui/icons-material/Notes";

const Diary = () => {
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
            <Button>
              ADD Food <AddIcon />
            </Button>
          </Box>
          <Box>
            <Typography>Lunch</Typography>
            <Button>
              ADD Food <AddIcon />
            </Button>
          </Box>
          <Box>
            <Typography>Dinner</Typography>
            <Button>
              Add Food <AddIcon />
            </Button>
          </Box>
          <Box>
            <Typography>Snacks</Typography>
            <Button>
              Add Food <AddIcon />
            </Button>
          </Box>
          <Box>
            <Typography>Exercise</Typography>
            <Button>
              ADD EXercise <AddIcon />
            </Button>
          </Box>
          <Box>
            <Typography>Water</Typography>
            <Button>
              ADD water <AddIcon />
            </Button>
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
