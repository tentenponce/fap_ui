module.exports = styles = (theme) => ({ //eslint-disable-line
  root: {
    backgroundColor: '#F1B557',
    width: '100%',
    height: '100vh'
  },
  logo: {
    textAlign: 'center',
    fontSize: '24px',
  },
  buttonStyles: {
    marginTop: '2rem',
    backgroundColor: '#0F52BA',
    color: '#FFFFFF',
    width: '100%',
    border: '1px solid #0F52BA',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#0F52BA',
      border: '1px solid #0F52BA'
    }
  }
})