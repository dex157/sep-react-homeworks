import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from './assets/logo.png';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    width: 200,
    height: 200
  }
};

class NasaCard extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={Logo} />
      </Card>
    );
  }
}

export default withStyles(styles)(NasaCard);
