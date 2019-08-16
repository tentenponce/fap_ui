import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Grid, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';

class Logs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      names: [],
      logs: [],
      open: false,
      selectedName: '',
    }

  }

  componentDidMount() {
    axios.get('http://localhost:10010/dtr')
    .then(resp => {
      const names = []

      for (var i in resp.data) {
        if (!names.includes(resp.data[i].empName.toUpperCase())) {
          names.push(resp.data[i].empName.toUpperCase());
        }
      }

      this.setState({ logs: resp.data, names })
    })
  }

  render() {

    const { classes } = this.props;
    const { logs, names, open, selectedName } = this.state;
    console.log(logs)
    return (
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              names ?
              names.map(name => {
                 return (
                  <TableRow>
                   <TableCell>{name}</TableCell>
                   <TableCell><Button onClick={ () => this.setState({selectedName: name, open: true})} className={classes.buttonStyles}>Details</Button></TableCell>
                  </TableRow>
                 )
               })
               : null
            }
          </TableBody>
        </Table>
        </Grid>
        <Grid item xs={4}></Grid>
        <Dialog
          open={open}
          maxWidth='lg'
          onClose={ () => this.setState({open: false})} 
        >
          <DialogTitle>{ selectedName }</DialogTitle>
          {
            logs.filter(log => log.empName.toUpperCase() == selectedName).map(log => 
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Time In</TableCell>
                    <TableCell>Time Out</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{moment(log.logDate).format('MMMM Do YYYY')}</TableCell>
                    <TableCell>{moment(log.timeIn).format('h:mm:ss a')}</TableCell>
                    <TableCell>{moment(log.timeOut).format('h:mm:ss a')}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )
          }
        </Dialog>
      </Grid>
    )
  }
}

export default withStyles(styles)(Logs);
