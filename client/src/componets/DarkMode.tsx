import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box } from "@mui/material";

import Switch from "@mui/material/Switch";

const DarkModebar = ({ check, change }: { check: boolean; change: any }) => {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          color: "#FB8B24",
          right:20,
        
          

        
          padding: "10px",
         
          top:90,
        }}
      >
        <LightModeIcon />

        <Switch
          checked={check}
          onChange={change}
          inputProps={{ "aria-label": "controlled" }}
        />
        <DarkModeIcon />
      </Box>
    </div>
  );
};

export default DarkModebar;
