import React from 'react';
import { Grid, Button, Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles';

class Main extends React.Component {
  render() {

    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Typography className={classes.logo}>LOGO</Typography>
            <Link to='/register' style={{textDecoration: 'none'}}>
              <Button className={classes.buttonStyles}>Register</Button>
            </Link>
            <Link to='/logs' style={{textDecoration: 'none'}}>
              <Button className={classes.buttonStyles}>Logs</Button>
            </Link>
            <Button className={classes.buttonStyles}>Users</Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Card>
    )
  }
}

export default withStyles(styles)(Main);