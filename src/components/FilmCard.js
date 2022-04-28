import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { grey } from '@mui/material/colors';

// Card de peliculas
const FilmCard = (props) => {
  
  // Probablemente props sea algo así:
  // {
  //   name: 'Film',
  //   description: bleble,
  //   imgUrl: imgUrl,
  //   width: 100%,
  //   height: 150px
  // }
  const width = ('width' in props) ? props.width : "100%";
  const height = ('height' in props) ? props.height : "150px"
  const mediaWidth = ('mediaWidth' in props) ? props.mediaWidth : width;
  const mediaHeight = ('mediaHeight' in props) ? props.mediaHeight : height;
  return(
    <>
      <Card 
        sx={{ width: width, height: height }} 
        id={props.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={mediaWidth}
            width={mediaHeight}
            image={props.imgUrl}
            alt={props.title}
          />
        </CardActionArea>
      </Card>
    </>
  );
}

export default FilmCard;
