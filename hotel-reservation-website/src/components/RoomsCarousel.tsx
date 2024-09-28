import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import room1 from '../assets/single.png'; // Importing images correctly
import room2 from '../assets/double.png';
import room3 from '../assets/balcony.png';
import room4 from '../assets/apartm.png'; // room4 not used but keeping it for future use

// Sample rooms data with proper image references
const rooms = [
    {
        id: 1,
        title: 'Classic Balcony Room',
        price: '$600/Night',
        img: room1, // Use the actual imported image
        description: 'Aenean vehicula ligula eu rhoncus porttitor.',
    },
    {
        id: 2,
        title: 'Superior Double Room',
        price: '$400/Night',
        img: room2,
        description: 'Nunc rutrum porta placea ullamcorper.',
    },
    {
        id: 3,
        title: 'Super Balcony Double Room',
        price: '$300/Night',
        img: room3, // Use the actual imported image
        description: 'Duis vel lacinia quam nunc vehicula.',
    },
];

const RoomsCarousel: React.FC = () => {
    const navigate = useNavigate();

    // Settings for the slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960, // Medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Navigate to the room details page when a card is clicked
    const handleRoomClick = (roomId: number) => {
        navigate(`/room-details/${roomId}`); // Redirect to detailed room page
    };

    return (
        <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: '#333' }}>
                Rooms & Suites
            </Typography>
            <Slider {...settings}>
                {rooms.map(room => (
                    <Card
                        key={room.id}
                        sx={{
                            maxWidth: 345,
                            margin: '0 auto', // Center cards
                            cursor: 'pointer',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)', // Slightly enlarge on hover
                            },
                        }}
                        onClick={() => handleRoomClick(room.id)}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={room.img} // Use the actual image from the array
                            alt={room.title}
                            sx={{ borderRadius: '8px 8px 0 0' }} // Rounded top corners
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h6" component="div">
                                {room.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {room.description}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                            <Typography variant="h6" sx={{ color: '#333' }}>
                                {room.price}
                            </Typography>
                            <Button variant="contained" color="primary">
                                Book Now
                            </Button>
                        </Box>
                    </Card>
                ))}
            </Slider>
        </Box>
    );
};

export default RoomsCarousel;
