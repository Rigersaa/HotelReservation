import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'; // Import MUI Email icon
import PhoneIcon from '@mui/icons-material/Phone'; // Import MUI Phone icon

const ContactUs: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 5,
                gap: 4,
            }}
        >
            {/* Google Maps Embed Section */}
            <Box
                sx={{
                    flex: 1,
                    height: { xs: '300px', md: '500px' },
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12248.222190634415!2d19.99546036129585!3d39.8729936445116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b15b3f10e0755%3A0x2a2d150a9416f53b!2sSaranda%20Beach!5e0!3m2!1sen!2s!4v1727127826230!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>

            {/* Contact Info Section */}
            <Box
                sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    bgcolor: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    Have questions or need more information? Get in touch with us.
                </Typography>

                {/* Contact Info */}
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <EmailIcon style={{ marginRight: '10px' }} />
                        <Typography variant="body1" color="text.primary">
                            rigersabicakuu@mail.com
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PhoneIcon style={{ marginRight: '10px' }} />
                        <Typography variant="body1" color="text.primary">
                            +355 685 114 653
                        </Typography>
                    </Box>
                </Box>

                {/* Optional: Contact Form */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Send Us a Message
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Your Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" color="primary" fullWidth>
                            Send Message
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;
