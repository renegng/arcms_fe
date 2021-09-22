import React, {useState} from 'react'
import { connect } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { withStyles, TextField, Typography, Button } from '@material-ui/core'
import descriptionImg from '../images/user_f_03.svg'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: '#3A405A',
  },

  button: {
    background: 'white',
    width: '200px',

  },

  description: {
    display: 'flex',
    width: '50%',
    marginTop: '20px'
  },

  descImg: {
    maxHeight: '35%',
    maxWidth: '35%',
  }

}

const Home = ({classes}) => {
  const history = useHistory()


  return (
      <div className={classes.root}>

        <h1>Bienvenido a ARCMS</h1>
        <div className={classes.description}>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <img className={classes.descImg} src={descriptionImg} alt="description" />
        </div>
        <Button className={classes.button} onClick={() => history.push('/setup')}>Empieza Configuracion</Button>

    </div>
  )
}

const mapState = state => ({

})

const connected = connect(mapState, null)(Home)

export default withStyles(styles)(connected)
