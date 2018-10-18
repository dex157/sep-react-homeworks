import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = {
  root: {
    width: '30%',
    padding: '20px',
  },
  title: {
    fontSize: 20,
    fontWeight: 600
  }
};

class RoverPhotos extends PureComponent {
  render() {
    const { classes, photos, name } = this.props;
    return (
      <Paper className={classes.root}>
        <Typography className={classes.title} component="h2">{name}</Typography>
        <GridList cols={3}>
          {photos.map(photo => (
            <GridListTile
              key={photo.id}
              cols={Math.round(Math.random() * 3 - 0.5)}
            >
              <img src={photo.img_src} alt={photo.camera.full_name} />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    );
  }
}

export default withStyles(styles)(RoverPhotos);
