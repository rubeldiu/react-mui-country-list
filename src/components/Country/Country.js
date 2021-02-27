import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles=makeStyles((theme)=>({
    root: {
        maxWidth: 300,
        marginBottom:theme.spacing(3)
      },
      media: {
        height: 140,
      },
     
}))

const Country = (props) => {
    const classes= useStyles();
    const {name,flag,capital,population}=props.country;
    return (
        <Container className={classes.root}>      
              <Card>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={flag}
                    title={name}
                    />
                  <CardContent>
                    <Typography variant="h6">
                      {name}
                    </Typography>
                    <Typography>
                      {capital}
                    </Typography>
                    <Typography>
                      {population}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" color="secondary" onClick={()=>props.handleCountry(props.country)}>View Country</Button>
                </CardActions>
              </Card>
    </Container>

    );
};

export default Country;