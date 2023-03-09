import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const img = require("../../assets/illustrations/computer-vision-and-image-processing.jpeg");

export default function CardArea() {

  const [value, setValue] = React.useState(4.3);

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div" style={{ fontWeight: "bold" }}>
            Computer Vision & Image Processing
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <AccountCircleIcon />
            <Typography variant="body2" color="text.secondary">
              Prashant Jha
            </Typography>
          </Box>
          <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Typography >4.3</Typography>
            <Rating name="read-only" value={value} readOnly />
            <Typography color="text.secondary">(980)</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}