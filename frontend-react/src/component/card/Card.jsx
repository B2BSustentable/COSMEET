import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import loreal from '../../assets/l-oreal-3.svg';

export default function CardEmpresa() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={loreal} 
          alt="L'Oreal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            L'Oreal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
A L'Oréal é uma empresa líder global em cosméticos e produtos de beleza.É conhecida por sua extensa linha de produtos para cuidados com a pele, maquiagem, fragrâncias e cuidados com os cabelos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
