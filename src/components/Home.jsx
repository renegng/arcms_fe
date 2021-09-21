import React, {useState} from 'react'
import { connect } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { withStyles, TextField, Typography, Button } from '@material-ui/core'


const styles = {
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    // padding: '50px 100px 100px 100px',
    // alignItems: 'center',
    background: '#3A405A',
  },

  button: {
    background: 'white'

  }

}

const Home = ({classes}) => {
  const history = useHistory()


  return (
      <div className={classes.root}>

        <h1>Bienvenido a ARCMS</h1>
        <Button className={classes.button} onClick={() => history.push('/setup')}>Empieza Configuracion</Button>

    </div>
  )
}

const mapState = state => ({

})

const connected = connect(mapState, null)(Home)

export default withStyles(styles)(connected)
