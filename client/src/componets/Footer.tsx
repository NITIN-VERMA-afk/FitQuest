
import { Typography, Button, Paper, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/system/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { grey } from "@mui/material/colors";

const FooterProducts: String[] = ["food", "exercise", "premium"];

const FooterResourses: string[] = [
  "Blog",
  "Community",
  "Contact us",
  "Support Center",
];
const FooterCompany: String[] = ["About us"];

const FooterLinks: string[] = [
  "Community Guidelines",
  "Feedback",
  "Terms",
  "Privacy",
  "API",
  "Cookies Preferences",
  "AdChoices",
];

interface Logos {
  id: number;
  name: string;
  icons: JSX.Element;
}



const SocialMediaLinks: Logos[] = [
  { id: 1, name: "Instagram", icons: <InstagramIcon /> },
  { id: 2, name: "YouTube", icons: <YouTubeIcon /> },
  { id: 3, name: "Twitter", icons: <TwitterIcon /> },
  { id: 4, name: "Facebook", icons: <FacebookIcon /> },
  { id: 5, name: "GitHub", icons: <GitHubIcon /> },
  { id: 6, name: "LinkedIn", icons: <LinkedInIcon /> },
];

const Footer = () => {
  return (
    <Box component="footer" mb={0}>
      <Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            padding: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              padding: 2,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              FitQuest
            </Typography>
            <Typography variant="body1">
              Find your healthy, and your happy.
            </Typography>
            <Button
             
              endIcon={<ArrowForwardIcon />}
              sx={{ width: { xs: "100%", md: "100%" } }}
            >
              Start today
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap", 
              justifyContent: { xs: "center", md: "flex-start" }, 
            }}
          >
            {FooterProducts.map((item, index) => (
              <Box key={index} mx={1}>
                <Typography variant="h5">{item.toUpperCase()}</Typography>
              </Box>
            ))}
            {FooterResourses.map((item, index) => (
              <Box key={index} mx={1}>
                <Typography variant="h5">{item.toUpperCase()}</Typography>
              </Box>
            ))}
            {FooterCompany.map((item, index) => (
              <Box key={index} mx={1}>
                <Typography variant="h5">{item.toUpperCase()}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Typography variant="body2">
            &copy; 2024 Fitquest. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 1,
            }}
          >
            {FooterLinks.map((item, index) => (
              <Link key={index} href="#" color="textSecondary" underline="hover">
                {item}
              </Link>
            ))}
          </Box>
        </Box>

       

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mt: 1,
            pb: 2,
          }}
        >
          {SocialMediaLinks.map((logo) => (
            <IconButton
              key={logo.id}
              href="#"
              color="primary"
              sx={{ ":hover": { backgroundColor: grey[200] } }}
            >
              {logo.icons}
            </IconButton>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;

