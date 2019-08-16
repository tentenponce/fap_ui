import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, TextField, Typography, FormControl, Button, IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import styles from './styles';
import Camera from 'react-html5-camera-photo';
import b64ToBlob from 'b64-to-blob';
import axios from 'axios';

class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      capturedPhoto: null,
      name: '',
      takePhoto: false,
    }
  }

  onTakePhoto (dataUri) {
    console.log('takePhoto')
    const blob = b64ToBlob(dataUri.substring(22), 'image/png')
    this.setState({ capturedPhoto: blob })
  }

  registerUser() {
    const formData = new FormData()
    formData.append('face', this.state.capturedPhoto, `${this.state.name}.png`)

    axios.post('http://localhost:10010/register',
      formData,
      {
        'Content-Type': 'multipart/form-data'
      })
      .then(resp => alert(resp.data.message))
      .catch(error => console.log(error))
  }

  render() {

    const { classes } = this.props;
    const { name, capturedPhoto, takePhoto } = this.state;

    const img = capturedPhoto == null ? null : URL.createObjectURL(capturedPhoto)

    return (
      <Card className={classes.cardStyles}>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography align='center' variant='h4' style={{padding: '2rem 0'}}>REGISTER</Typography>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <FormControl className={classes.textStyles}>
                      <TextField
                        name='name'
                        label='Enter your name'
                        variant='outlined'
                        value={name} 
                        fullWidth
                        onChange = { e => this.setState({ name: e.target.value }) }/>
                    </FormControl>
                    <Button className={classes.buttonStyles} onClick={() => this.setState({ takePhoto: true, capturedPhoto: null })}><PhotoCamera style={{marginRight: 5}} /> Take a Photo</Button>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
            </Grid>
            {
              !capturedPhoto && takePhoto ?
              <Grid item xs={6} style={{marginTop: '2rem'}}>
                <Camera isMaxResolution={true} onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); }} />
              </Grid> :
              <Grid item xs={6} style={{marginTop: '2rem'}}> 
                <Typography align='center'><img style={{ width: '60%' }} src={img}></img></Typography>
                {
                  capturedPhoto && name ?
                  <Button className={classes.buttonStyles} onClick={ () => this.registerUser()}>Submit</Button> : null 
                }
              </Grid>
            }
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Register);