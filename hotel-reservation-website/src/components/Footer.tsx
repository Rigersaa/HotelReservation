import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#333', color: 'white', padding: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
                Luxury Hotel
            </Typography>
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} All Rights Reserved
            </Typography>
            <Box sx={{ marginTop: 2 }}>
                <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: 'white' }}>
                    <FacebookIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: 'white' }}>
                    <InstagramIcon />
                </IconButton>
                <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: 'white' }}>
                    <TwitterIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

// Render the Footer component
export default Footer;
