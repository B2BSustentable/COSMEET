import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import loreal from '../../assets/l-oreal-3.svg';

export default function CardEmpresa() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 190, maxWidth: 900 }}>
      <CardActionArea onClick={handleExpandClick}>
        <CardMedia
          component="img"
          height="100"
          image={loreal} 
          alt="L'Oreal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            L'Oreal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Batom, Creme, Shampoo</b>
          </Typography>
          {expanded && (
            <Typography variant="body2" color="text.secondary">
              A L'Oréal é uma empresa líder global em cosméticos e produtos de beleza. É conhecida por sua extensa linha de produtos para cuidados com a pele, maquiagem, fragrâncias e cuidados com os cabelos.
            </Typography>
          )}
          {expanded && (
            <Button component={Link} to="/company" color="primary">
              Mais informações  
            </Button>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
