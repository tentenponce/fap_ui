import React from 'react'
import axios from 'axios'
import Camera from 'react-html5-camera-photo';
import b64ToBlob from 'b64-to-blob'

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      logs: [],
      capturedPhoto: null,
      name: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:10010/dtr')
    .then(resp => {
      console.log(resp.data)
      this.setState({ logs: resp.data })
    })
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
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
  }

  render() {
    const { logs, capturedPhoto, name } = this.state

    // optional to display photo
    const img = capturedPhoto == null ? null : URL.createObjectURL(capturedPhoto)

    return (
      <div>
        {
          logs.map(log => 
            <div>
              <div>
                { log.empName }
              </div>
              <div>
                Date: { log.logDate }
              </div>
              <div>
                Time In: { log.timeIn }
              </div>
              <div>
                Time Out: { log.timeOut }
              </div>
            </div>
          )
        }
        <Camera onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } } />
        <input onChange = { e => this.setState({ name: e.target.value }) } />
        <button onClick = { () => this.registerUser() } />
      </div>
    )
  }
}

export default Main