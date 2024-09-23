import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

// Define Room type for TypeScript
interface Room {
    id: number;
    title: string;
    price: string;
    img: string;
    description: string;
}

// Room data
const rooms: Room[] = [
    {
        id: 1,
        title: 'Classic Balcony Room',
        price: '$600/Night',
        img: 'path-to-image-1.jpg', // Replace with actual image paths
        description: 'Aenean vehicula ligula eu rhoncus porttitor.',
    },
    {
        id: 2,
        title: 'Superior Double Room',
        price: '$400/Night',
        img: 'path-to-image-2.jpg',
        description: 'Nunc rutrum porta placea ullamcorper.',
    },
    {
        id: 3,
        title: 'Super Balcony Double Room',
        price: '$300/Night',
        img: 'path-to-image-3.jpg',
        description: 'Duis vel lacinia quam nunc vehicula.',
    },
];

// RoomCard component with props typing
const RoomCard: React.FC<{ room: Room }> = ({ room }) => (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="200"
            image={room.img}
            alt={room.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {room.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {room.description}
            </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <Typography variant="h6">{room.price}</Typography>
            <Button variant="contained" color="primary">Book Now</Button>
        </Box>
    </Card>
);

// Main component
const RoomsAndSuites: React.FC = () => (
    <Box sx={{ flexGrow: 1, py: 5 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
            Rooms & Suites
        </Typography>
        <Typography variant="subtitle1" gutterBottom textAlign="center">
            Choose from our luxurious selection of rooms.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
            {rooms.map((room) => (
                <Grid item xs={12} sm={6} md={4} key={room.id}>
                    <RoomCard room={room} />
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default RoomsAndSuites;
