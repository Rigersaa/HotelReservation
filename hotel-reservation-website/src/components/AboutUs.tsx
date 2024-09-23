import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import aboutUsImage from '../assets/aboutus1.png';
import aboutUsImage2 from '../assets/aboutus2.png';

const AboutUs: React.FC = () => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 600 },
    });

    return (
        <Container sx={{ py: 5 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                    <animated.div style={fadeIn}>
                        <Box
                            component="img"
                            src={aboutUsImage}
                            alt="Luxurious hotel interior showcasing elegance and comfort"
                            sx={{
                                width: '80%', // Adjusted size for the first image
                                borderRadius: '10px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.03)' },
                            }}
                        />
                        <Box
                            component="img"
                            src={aboutUsImage2}
                            alt="Team providing personalized service"
                            sx={{
                                position: 'absolute',
                                bottom: '10%', // Adjusted positioning
                                right: '10%',  // Adjusted positioning
                                width: '50%',  // Adjust the size of the overlay image
                                borderRadius: '10px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.03)' },
                            }}
                        />
                    </animated.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <animated.div style={fadeIn}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h4" gutterBottom>
                                About Us
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Welcome to our luxury hotel, where elegance meets comfort. Our dedicated team is committed to providing you with an unforgettable experience.
                            </Typography>
                            <Typography variant="body1">
                                We offer top-notch amenities, exquisite dining options, and a serene environment to make your stay relaxing and enjoyable. Join us and discover the perfect getaway.
                            </Typography>
                        </Box>
                        <Grid item xs={12} md={6}>
                    <animated.div style={fadeIn}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h5" gutterBottom>
                                Our Vision
                            </Typography>
                            <Typography variant="body1">
                                We strive to create a welcoming atmosphere that reflects our commitment to excellence and personalized service. Your satisfaction is our top priority.
                            </Typography>
                        </Box>
                    </animated.div>
                </Grid>
                    </animated.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;
