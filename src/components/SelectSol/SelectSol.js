import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import debounce from 'debounce';

const styles = {
  root: {
    width: 500,
    padding: '0 20px',
    margin: '20px 0 40px'
  },
  slider: {
    padding: '22px 0px'
  },
  text: {
    textAlign: 'center',
    padding: '0 0 10px 0'
  }
};

class SelectSol extends PureComponent {
  state = {
    sol: this.props.selectedSol // eslint-disable-line react/destructuring-assignment
  };

  constructor(props) {
    super(props);
    this.changePropsSol = debounce(this.changePropsSol, 100);
  }

  handleChange = (_e, sol) => {
    this.setState({ sol: Math.round(sol) });
    this.changePropsSol(Math.round(sol));
  };

  changePropsSol(value) {
    const { changeSol } = this.props;
    changeSol(value);
  }

  render() {
    const { minSol, maxSol, classes } = this.props;
    const { sol } = this.state;
    return (
      <Paper className={classes.root}>
        <Slider
          className={classes.slider}
          value={sol}
          min={minSol}
          max={maxSol}
          onChange={this.handleChange}
        />
        <Typography className={classes.text} component="p">
          Sol: <b>{sol}</b>
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(SelectSol);
