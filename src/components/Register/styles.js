module.exports = styles = (theme) => ({ //eslint-disable-line
  cardStyles: {
    // marginTop: '2rem',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%'
  },
  gridStyles: {
    backgroundColor: '#F1B557',
    width: '100%',
    height: '70vh'
  },
  textStyles: {
    width: '100%',
    fontSize: 14,
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    padding: '1rem 0'
  },
  buttonStyles: {
    margin: '1rem 0',
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