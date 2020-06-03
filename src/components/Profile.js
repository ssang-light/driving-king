import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3),
    background: '#eeeeee',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
});

class Profile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div>
            <img
              alt="Your Photo"
              width="100"
              height="100"
              src="asset/images/hyosung.JPG"
            />
            <div>
              <div>운전 경력{': 6년'} </div>
              <div>지역 {': 경기'}</div>
              <div>면허 취득일{' 2014.12.24'}</div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(Profile);
