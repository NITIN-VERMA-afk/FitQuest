import { Typography, Button, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/system/Box";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterProducts: String[] = ["food", "exercise", "apps", "premium"];

const FooterResourses: string[] = [
  "Blog",
  "Community",
  "Contact us",
  "Support Center",
];
const FooterCompany: String[] = ["About us", "Careers", "Press"];

const FooterLinks: string[] = [
  "CommunityGuidelines",
  "Feedback",
  "Terms",
  "Privacy",
  "API",
  "CookiesPreferences",
  "AdChoices",
];

interface Logos {
  id: number;
  name: string;
  icons: JSX.Element;
}

const Logos: Logos[] = [
  { id: 1, name: "instagram", icons: <InstagramIcon /> },
  { id: 2, name: "youtube", icons: <YouTubeIcon /> },
  { id: 3, name: "twitter", icons: <XIcon /> },
  { id: 4, name: "facebook", icons: <FacebookIcon /> },
];

const Footer = () => {
  return (
    <>
      <Box>
        <Paper>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3,padding:"24px" }}>
              <Typography variant="h3">FitQuest</Typography>
              <Typography variant="body1">
                Find your healthy, and your happy.
              </Typography>
              <Button sx={{ width: '100%', md: { width: 48 } }} variant="outlined">
                Start today <ArrowForwardIcon />
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box  sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5">Product</Typography>
                {FooterProducts.map((item, index) => (
                  <ul key={index}>
                    <li>{item.toUpperCase()}</li>
                  </ul>
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
                <Typography variant="h5">Resources</Typography>
                {FooterResourses.map((item, index) => (
                  <ul key={index}>
                    <li>{item.toUpperCase()}</li>
                  </ul>
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
                <Typography variant="h5">Company</Typography>
                {FooterCompany.map((item, index) => (
                  <ul key={index}>
                    <li>{item.toUpperCase()}</li>
                  </ul>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ marginTop: 4 }}>
            <Typography sx={{ display: 'flex', marginTop: 2 }}>
              <CopyrightIcon />
              2024Fitquest
              {FooterLinks.map((item) => (
                <ul>
                  <li>{item.toUpperCase()}</li>
                </ul>
              ))}
            </Typography>
            <Box  sx={{ display: 'flex',alignItems:"center", justifyContent:'center', gap:2, marginTop: 2 }}>
              {Logos.map((logo) => (
                <Box key={logo.id}>
                  <Box sx={{textAlign:"center"}}>{logo.icons} </Box>
                  {logo.name}
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Footer;