import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { homeObjone,homeObjtwo,homeObjthree,homeObjfour,homeObjfive,homeObjsix } from './Data'
import './Categories.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },  
  media: {
    height: 140,
  },
});

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            EXPAND ALL
        </Button>
      </CardActions>
    </Card>
  );
}

export function Categories(){
    return(
        <div className="All">
        <div style={{height:"60px", textAlign: "center"}}><h1>Various Categories</h1></div>

        <div className="displaycategory">
            <div className="subcategory"> <MediaCard {... homeObjone}/> </div> 
            <div className="subcategory"> <MediaCard {... homeObjtwo}/> </div>
            <div className="subcategory"> <MediaCard {... homeObjthree}/> </div>
            <div className="subcategory"> <MediaCard {... homeObjfour}/> </div>
            <div className="subcategory"> <MediaCard {... homeObjfive}/> </div>
            <div className="subcategory"> <MediaCard {... homeObjsix}/> </div>
        </div>
        </div>
    )
}