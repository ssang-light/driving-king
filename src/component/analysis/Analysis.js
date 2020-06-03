import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
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

class Analysis extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Paper className={classes.paper}>종합 점수</Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <div>운전 차량{': SM5'}</div>
              <img src="https://autoimg.danawa.com/photo/3238/model_360.png" />
            </Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>지역 숙련도</Paper>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
              <div>3년 무사고</div>
              <img width="200" src="asset/images/BestDriverMark.png" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Analysis);
