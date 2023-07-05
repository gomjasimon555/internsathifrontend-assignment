import { Typography, Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Box p={10} sx={{ textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h2" sx={{ marginBottom: 4, color: '#333' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4, color: '#666' }}>
        Welcome to our online store! We are dedicated to providing you with the best shopping experience and high-quality products. Here's some information about our store:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
        <Typography variant="h6" sx={{ marginRight: 2, color: '#333', fontWeight: 'bold' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          At our store, our mission is to deliver top-notch products that meet your needs and exceed your expectations. We strive to offer a wide range of products, ensuring that you can find exactly what you're looking for.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
        <Typography variant="h6" sx={{ marginRight: 2, color: '#333', fontWeight: 'bold' }}>
          Our Team
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          We have a dedicated and passionate team working behind the scenes to curate the best selection of products and provide exceptional customer service. Our team is committed to your satisfaction and is always ready to assist you.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
        <Typography variant="h6" sx={{ marginRight: 2, color: '#333', fontWeight: 'bold' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          If you have any questions, feedback, or concerns, please don't hesitate to reach out to us. You can find our contact information on the Contact page. We value your input and look forward to hearing from you.
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#888' }}>
        Thank you for choosing our online store. Happy shopping!
      </Typography>
    </Box>
  );
};

export default AboutPage;
