import React, { useContext, useState } from "react";
import { Grid, Box, TextField } from "@mui/material";
import ProductCard from "../../components/Productcard";
import { ProductContext } from "../../context/ProductContext";

function HomeLayout() {
  const { data, loading, error } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data ? data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  ):[];

  return (
    <Box p={10} sx={{ display: "flex", justifyContent: "center" }}>
      {loading && <h1>Loading...</h1>}
      {!loading && error && <h1>Error Occurred</h1>}
      {!loading && !error && data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 5,
          }}
        >
          <Box sx={{ minWidth: 300 }}>
            <TextField
              label="Search by Name"
              value={searchTerm}
              onChange={handleSearch}
              fullWidth
            />
          </Box>
          <Grid container spacing={4}>
  {filteredData.length > 0 ? (
    filteredData.map((product, index) => (
      <Grid
        key={product.id}
        item
        xs={12}
        sm={6}
        md={index === filteredData.length - 1 ? 12 : 4}
        lg={index === filteredData.length - 1 ? 12 : 3}
      >
        <ProductCard product={product} />
      </Grid>
    ))
  ) : (
    <h1>No Data Found</h1>
  )}
</Grid>
        </Box>
      )}
    </Box>
  );
}

export default HomeLayout;
