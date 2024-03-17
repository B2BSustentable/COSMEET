import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

const CardEmpresa = ({ id, name, photo, about }) => {
  const [expanded, setExpanded] = React.useState(false);
  const Navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleGoToCompany = () => {
    Navigate(`/company/${id}`);
  }

  return (
    <Card sx={{ minWidth: 190, maxWidth: 900 }}>
      <CardActionArea onClick={handleExpandClick}>
        <CardMedia
          component="img"
          height="100"
          image={photo || ""}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {expanded && (
            <Typography variant="body2" color="text.secondary">
              <b>{about}</b>
            </Typography>
          )}
          {expanded && (
            <Button onClick={handleGoToCompany} color="primary">
              Mais informações  
            </Button>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardEmpresa;
