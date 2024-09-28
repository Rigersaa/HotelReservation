import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Grid, Paper, TextField, MenuItem } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import HotelIcon from '@mui/icons-material/Hotel';
import hotelImg from '../assets/hotel.png';  // Add a hotel placeholder image

// Button hover animation keyframes
const buttonHover = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;

// Room amenities hover animation keyframes
const cardHover = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
`;

// Styled button with beige background
const BeigeButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#f4a261',
    color: '#fff',
    borderRadius: '12px', // Add some rounded corners
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#e76f51',
        animation: `${buttonHover} 0.3s forwards`,
    },
}));

// Styled text fields for booking form (white background)
const StyledTextField = styled(TextField)({
    backgroundColor: '#fff',  // White background for inputs
    borderRadius: '4px',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ccc', // Subtle border color
        },
        '&:hover fieldset': {
            borderColor: '#e76f51', // Beige border on hover
        },
    },
});

// Styled paper for room amenities
const AmenitiesPaper = styled(Paper)({
    textAlign: 'center',
    padding: '16px',
    borderRadius: '12px',
    border: `2px solid #f4a261`,  // Beige border color
    backgroundColor: '#2b2b2b', // Dark background for consistency
    color: '#fff',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#f4a261', // Beige background on hover
        color: '#000', // Dark text on hover
        animation: `${cardHover} 0.3s forwards`,
    },
});

const RoomDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const roomsDetails = [
        {
            id: 1,
            title: 'Single Room with Sea View',
            price: '40 €/Night',
            img: hotelImg,  // Placeholder image
            description: 'The Single Room at Suites Kozi offers comfortable accommodation for up to three guests, featuring a double bed and a single bed. Enjoy breathtaking sea views from the room, making it a perfect retreat for relaxation and tranquility.',
            amenities: ['Free Wifi', 'Air Conditioning', 'Sea View'],
        },
        {
            id: 2,
            title: 'Deluxe Room with Balcony',
            price: '70 €/Night',
            img: hotelImg,  // Another placeholder image for variation
            description: 'Spacious deluxe room with a beautiful balcony and modern amenities. Ideal for a luxury stay.',
            amenities: ['Balcony', 'Air Conditioning', 'Breakfast Included'],
        },
    ];
    const room = roomsDetails.find(room => room.id === parseInt(id || '0'));

    if (!room) return <Typography>Room not found</Typography>;

    return (
        <Box sx={{ py: 5, backgroundColor: '#1a1a1a', color: '#fff', transition: 'all 0.3s ease' }}>
            <Grid container spacing={3}>
                {/* Left section: Reservation Form */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ p: 3, backgroundColor: '#2b2b2b', borderRadius: '10px', transition: 'all 0.3s ease' }}>
                        <Typography variant="h6" sx={{ color: '#fff' }}>
                            RESERVE:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#f4a261', mb: 2 }}>
                            From {room.price}
                        </Typography>

                        {/* New horizontal layout for check-in, check-out, adults, children, rooms */}
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12}>
                                <StyledTextField
                                    label="Check-in Date"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <CalendarTodayIcon sx={{ color: '#6c757d', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    label="Check-out Date"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <CalendarTodayIcon sx={{ color: '#6c757d', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    label="Adults"
                                    select
                                    fullWidth
                                    defaultValue="1"
                                    InputProps={{
                                        startAdornment: (
                                            <PersonIcon sx={{ color: '#6c757d', mr: 1 }} />
                                        ),
                                    }}
                                >
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                </StyledTextField>
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    label="Children"
                                    select
                                    fullWidth
                                    defaultValue="0"
                                    InputProps={{
                                        startAdornment: (
                                            <ChildCareIcon sx={{ color: '#6c757d', mr: 1 }} />
                                        ),
                                    }}
                                >
                                    <MenuItem value="0">0</MenuItem>
                                    <MenuItem value="1">1</MenuItem>
                                </StyledTextField>
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    label="Rooms"
                                    select
                                    fullWidth
                                    defaultValue="1 Room"
                                    InputProps={{
                                        startAdornment: (
                                            <HotelIcon sx={{ color: '#6c757d', mr: 1 }} />
                                        ),
                                    }}
                                >
                                    <MenuItem value="1 Room">1 Room</MenuItem>
                                    <MenuItem value="2 Rooms">2 Rooms</MenuItem>
                                </StyledTextField>
                            </Grid>
                        </Grid>

                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Total Cost: {room.price}
                        </Typography>
                        <BeigeButton fullWidth>
                            BOOK YOUR STAY NOW
                        </BeigeButton>
                    </Box>
                </Grid>

                {/* Right section: Room Details */}
                <Grid item xs={12} md={8}>
                    {/* Add Image above the title */}
                    <Box sx={{ mb: 3 }}>
                        <img
                            src={room.img}
                            alt={room.title}
                            style={{ width: '100%', borderRadius: '8px', transition: 'all 0.3s ease' }}
                        />
                    </Box>
                    <Typography variant="h4">{room.title}</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        {room.description}
                    </Typography>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6">Room Amenities:</Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {room.amenities.map((amenity, index) => (
                                <Grid item key={index} xs={4}>
                                    <AmenitiesPaper>{amenity}</AmenitiesPaper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RoomDetails;
