import React, {useState} from 'react'
import { connect } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { withStyles, TextField, Typography, Button, Card } from '@material-ui/core'
import descriptionImg from '../images/user_f_03.svg'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    // height: '100vh',
    // background: '#778DA9',
    alignItems: 'center'
  },

  button: {
    background: '#E0E1DD',
    width: '200px',
    alignSelf: 'center',
    marginBottom: '20px',

    '&.MuiButtonBase-root:hover': {
      background: '#778DA9'
    }

  },

  description: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '20px',
    borderRadius: '40px',
    padding: '10px',
    background: '#1B263B'
  },

  descImg: {
    maxHeight: '40%',
    maxWidth: '40%',
  },

  descText: {
    display: 'flex',
    alignItems: 'center',
    color: '#E0E1DD'
  }

}

const Home = ({classes}) => {
  const history = useHistory()


  return (
      <div className={classes.root}>

        <h1 style={{color: '#0D1B2A'}}>Bienvenido a ARCMS</h1>
        <Card className={classes.description} variant="elevation">
          <Typography className={classes.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <img className={classes.descImg} src={descriptionImg} alt="description" />
          </Typography>
          <Button variant='outlined' className={classes.button} onClick={() => history.push('/setup')}>Comenzar la Configuración</Button>

        </Card>
        

    </div>
  )
}

const mapState = state => ({

})

const connected = connect(mapState, null)(Home)

export default withStyles(styles)(connected)
