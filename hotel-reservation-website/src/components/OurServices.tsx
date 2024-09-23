import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SpaIcon from '@mui/icons-material/Spa';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const services = [
    { icon: <RoomServiceIcon />, title: 'Room Service', description: '24/7 room service for your convenience.' },
    { icon: <SpaIcon />, title: 'Spa', description: 'Relax and rejuvenate with our spa services.' },
    { icon: <RestaurantIcon />, title: 'Restaurant', description: 'Fine dining experience with exquisite cuisine.' },
    { icon: <PoolIcon />, title: 'Pool', description: 'Enjoy our luxurious swimming pool.' },
    { icon: <FitnessCenterIcon />, title: 'Fitness Center', description: 'State-of-the-art gym facilities.' },
    { icon: <LocalBarIcon />, title: 'Bar', description: 'Relax at our stylish bar with cocktails and more.' },
];

const Services: React.FC = () => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800 },
        delay: 200, // Delay for each item to create a stagger effect
    });

    return (
        <Box sx={{ py: 5, backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', color: 'white', mb: 4 }}>
                Our Services
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <animated.div style={{ ...fadeIn, transitionDelay: `${index * 100}ms` }}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: 2,
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // White with transparency
                                    textAlign: 'center',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                    transform: 'scale(0.9)', // Make boxes slightly smaller
                                    '&:hover': {
                                        transform: 'scale(1)', // Scale up on hover
                                        transition: 'transform 0.3s ease-in-out',
                                    },
                                }}
                            >
                                <Box sx={{ fontSize: '40px', color: '#dba970' }}>
                                    {service.icon}
                                </Box>
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {service.description}
                                </Typography>
                            </Paper>
                        </animated.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Services;
