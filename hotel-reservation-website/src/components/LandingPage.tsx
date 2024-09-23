import React, { useState } from 'react';
import { Box, Button, TextField, Typography, InputAdornment, Container, IconButton, Drawer, List, ListItemText, AppBar, Toolbar, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import BedIcon from '@mui/icons-material/Bed';

import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setMenuOpen(open);
    };

    const navItems = ['Home', 'About Us', 'Our Rooms', 'Contact Us'];

    return (
        <>
            {/* Navigation Bar */}
            <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Luxury Hotel
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {navItems.map((item) => (
                            <Button key={item} color="inherit">
                                {item}
                            </Button>
                        ))}
                        <Button variant="contained" sx={{ backgroundColor: '#dba970', color: 'white' }}>
                            Book Now
                        </Button>
                    </Box>
                    <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile View */}
            <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                        <Typography variant="h6">Menu</Typography>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {navItems.map((item) => (
                            <ListItemButton key={item} onClick={() => console.log(item)}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))}
                    </List>
                    <Button variant="contained" sx={{ backgroundColor: '#dba970', color: 'white', width: '100%' }}>
                        Book Now
                    </Button>
                </Box>
            </Drawer>

            {/* Hero Section */}
            <Box className="hero-section">
                <Typography variant="h2" sx={{ fontWeight: 'bold', paddingTop: '20vh', color: 'white', textAlign: 'center' }}>
                    Enjoy A Luxury Experience
                </Typography>

                {/* Booking Form Box */}
                <Container maxWidth="lg">
                    <Box className="booking-container" sx={{ backgroundColor: 'white', borderRadius: '10px', p: 3, mt: 5, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                        <Box className="booking-form" sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <TextField
                                label="Check-in Date"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                                sx={{ width: { xs: '100%', md: '18%' }, mb: { xs: 2, md: 0 } }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EventIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Check-out Date"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                                sx={{ width: { xs: '100%', md: '18%' }, mb: { xs: 2, md: 0 } }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EventIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Adults"
                                type="number"
                                variant="outlined"
                                sx={{ width: { xs: '100%', md: '12%' }, mb: { xs: 2, md: 0 } }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Child"
                                type="number"
                                variant="outlined"
                                sx={{ width: { xs: '100%', md: '12%' }, mb: { xs: 2, md: 0 } }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ChildCareIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Rooms"
                                type="number"
                                variant="outlined"
                                sx={{ width: { xs: '100%', md: '12%' }, mb: { xs: 2, md: 0 } }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button 
                                variant="contained" 
                                sx={{ backgroundColor: '#dba970', color: 'white', height: '56px', alignSelf: 'center', mt: { xs: 2, md: 0 }, width: { xs: '100%', md: 'auto' } }}
                            >
                                Check Availability
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default LandingPage;
