import { Typography, Box, TextField, Button } from '@mui/material';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box p={10} sx={{ textAlign: 'center' }}>
      <Typography variant="h2" sx={{ marginBottom: 4 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Have a question? Reach out to us using the form below.
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          <TextField
            label="Name"
            variant="outlined"
            required
            sx={{ width: '500px' }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Email"
            variant="outlined"
            required
            sx={{ width: '500px' }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
            sx={{ width: '500px' }}
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ width: '200px' }}>
            Send Message
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactPage;
