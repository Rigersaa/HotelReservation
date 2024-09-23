import React from 'react';
import { Box, Typography } from '@mui/material';

const VideoSection: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100vw', // Full viewport width
                height: '60vh', // Height remains
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                my: 4, // Margin for spacing
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
        >
            <video
                src={require('../assets/video.mp4')} // Replace with your video path
                autoPlay
                loop
                muted
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Ensure the video covers the area without distortion
                }}
            >
                Your browser does not support the video tag.
            </video>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                    color: 'white',
                }}
            >
                <Typography variant="h5">Look at Our Hotel</Typography>
            </Box>
        </Box>
    );
};

export default VideoSection;
