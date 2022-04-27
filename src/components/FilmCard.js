import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

// Card de peliculas
const FilmCard = (props) => {
  
  // Probablemente props sea algo así:
  // {
  //   name: 'Film',
  //   description: bleble,
  //   imgUrl: imgUrl,
  // }
  return(
    <>
      <Card sx={{ maxWidth: 345, minWidth: 100 }} id={props.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150px"
            width="100%"
            image={props.imgUrl}
            alt={props.title}
          />
        </CardActionArea>
      </Card>
    </>
  );
}

export default FilmCard;
