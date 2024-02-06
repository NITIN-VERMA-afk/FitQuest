import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Leaderboard = () => {
  return (
    <div>
      <Box sx={{ height: "100vh" }}>
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
      </Box>
    </div>
  );
};

export default Leaderboard;
