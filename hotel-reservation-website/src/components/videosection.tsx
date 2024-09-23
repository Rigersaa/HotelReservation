import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const VideoSection: React.FC = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Box
                sx={{
                    width: '100%', // Full width
                    height: '60vh', // Adjusted height
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
                    src={require('../assets/video.mp4')} // Ensure correct path
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Cover to maintain aspect ratio
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
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better visibility of text
                        color: 'white',
                    }}
                >
                    <Typography variant="h5">Look at Our Hotel</Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default VideoSection;
