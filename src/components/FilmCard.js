import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

// Card de peliculas
const FilmCard = (props) => {
  
  // Probablemente props sea algo así:
  // {
  //   name: 'Film',
  //   description: bleble,
  //   imgUrl: imgUrl,
  //   width: 100%,
  //   height: 100%,
  //   urlLink: 'link to web on click'
  // }
  const navigate = useNavigate();
  const urlLink = ('urlLink' in props) ? props.urlLink : `/movie/${props.id}`;
  const width = ('width' in props) ? props.width : "100%";
  const height = ('height' in props) ? props.height : "100%"
  const mediaWidth = ('mediaWidth' in props) ? props.mediaWidth : width;
  const mediaHeight = ('mediaHeight' in props) ? props.mediaHeight : height;

  return(
    <>
      <Card
        sx={{ width: width, height: height, minWidth: '100px' }} 
        id={props.id}>
        <CardActionArea 
        onClick={() =>{navigate(urlLink)}}
        >
          <CardMedia
            component="img"
            height={mediaHeight}
            width={mediaWidth}
            image={props.imgUrl}
            alt={props.title}
          />
        </CardActionArea>
      </Card>
    </>
  );
}

export default FilmCard;
