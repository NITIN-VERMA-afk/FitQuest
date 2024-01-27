import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box } from "@mui/material";

import Switch from "@mui/material/Switch";

const DarkModebar = ({ cheak, change }: { cheak: boolean,change: any }) => {
  return (
    <div>
      <Box sx={{position:"fixed",color:"#FB8B24"}}>
        <LightModeIcon />

        <Switch
          checked={cheak}
          onChange={change}
          inputProps={{ "aria-label": "controlled" }}
        />
        <DarkModeIcon />
      </Box>
    </div>
  );
};

export default DarkModebar;
