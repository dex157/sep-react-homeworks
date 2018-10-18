import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 400
  },
  paragraph: {
    width: '100%',
    textAlign: 'center'
  },
  input: {
    width: '100%'
  }
});

class Login extends PureComponent {
  state = {
    inputValue: ''
  };
  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleKeyPress = event => {
    const { inputValue } = this.state;
    const { onEnter } = this.props;

    if (event.key === 'Enter') {
      onEnter(inputValue);
    }
  };
  render() {
    const { classes } = this.props;
    const { inputValue } = this.state;
    return (
      <Paper className={classes.root}>
        <Typography className={classes.paragraph} component="p">
          Для получения ключа авторизации необходимо зарегестрироваться на сайте{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.nasa.gov/api.html#authentication"
          >
            NASA
          </a>
        </Typography>
        <TextField
          value={inputValue}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={classes.input}
          label="Nasa API Key"
          margin="dense"
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Login);
