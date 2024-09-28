import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SpaIcon from '@mui/icons-material/Spa';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const services = [
    {
        title: 'Room Service',
        description: '24/7 room service with a variety of cuisines.',
        icon: <RoomServiceIcon fontSize="large" />,
    },
    {
        title: 'Spa & Wellness',
        description: 'Relax with our spa treatments and wellness programs.',
        icon: <SpaIcon fontSize="large" />,
    },
    {
        title: 'Dining',
        description: 'Enjoy gourmet dining experiences at our restaurants.',
        icon: <RestaurantIcon fontSize="large" />,
    },
    {
        title: 'Swimming Pool',
        description: 'Dive into our luxurious swimming pool.',
        icon: <PoolIcon fontSize="large" />,
    },
    {
        title: 'Fitness Center',
        description: 'Stay fit with our state-of-the-art gym facilities.',
        icon: <FitnessCenterIcon fontSize="large" />,
    },
    {
        title: 'Bar & Lounge',
        description: 'Relax with drinks at our elegant bar and lounge.',
        icon: <LocalBarIcon fontSize="large" />,
    },
];

const OurServices: React.FC = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 600 },
    });

    return (
        <Box
            sx={{
                py: 5,
                background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url("/path/to/your/background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'white' }}>
                Our Services
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <animated.div style={fadeIn}>
                            <Box
                                sx={{
                                    p: 3,
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'scale(1.05)' },
                                }}
                            >
                                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                                <Typography variant="h6" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2">
                                    {service.description}
                                </Typography>
                            </Box>
                        </animated.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurServices;
