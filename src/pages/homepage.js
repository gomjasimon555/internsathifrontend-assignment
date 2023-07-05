import { Typography, Box, Grid, Button } from '@mui/material';
import ProductCard from '../components/Productcard';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();



 

  return (
    <Box p={10}>
      <Typography variant="h2" sx={{ marginBottom: 4, textAlign: 'center', color: '#333' }}>
        Welcome to Our Online Store
      </Typography>


      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button variant="contained" color="primary" size="large" onClick={()=>navigate("/products")}>
          View All Products
        </Button>
      </Box>

      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4" sx={{ marginBottom: 2, color: '#333',textAlign: 'center'  }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=2000" alt="Fast Delivery" style={{ width: '100px', marginBottom: '16px' }} />
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Fast Delivery
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                We offer quick and reliable delivery to ensure you receive your products on time.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7k0oG1Ihcj452-hi3mQkMJMk3r-WEGWh7MJOYXD45oTH4AKoEXRyaNENI9sHY6rq4_O0&usqp=CAU" alt="Quality Products" style={{ width: '100px', marginBottom: '16px' }} />
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Quality Products
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                We carefully select high-quality products to ensure your satisfaction and meet your needs.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg" alt="Customer Support" style={{ width: '100px', marginBottom: '16px' }} />
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Excellent Customer Support
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Our dedicated support team is available to assist you with any inquiries or issues you may have.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Homepage;

