import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button, Card, Tab, Tabs} from '@material-ui/core'
import {FacebookOutlined, PublicOutlined, Twitter, Instagram, YouTube, Email, Phone, WhatsApp, LocationOn} from '@mui/icons-material';


const styles = {
    root: {
        // borderBottom: '10px solid white',
    padding: '1rem',
    // height: '80vh',
    width: '80vw',
    textAlign: 'center',
    background: '#FBEDC6',
    backdropFilter: 'saturate(180%) blur(10px)',
    marginTop: '2.5rem',
    borderRadius: '40px'
    },

    steps: {
    textAlign: 'center',
    color: '#392F5A',
    fontSize: '1.75rem'
  },

  textfields: {
    marginBottom: '1rem',
    background: '#FEF9EC'
  },

  stepOneInputs: {
    display: 'flex',
    // width: '100%',
    justifyContent: 'space-evenly'
  },

  buttons: {
    background: '#9DD9D2',
    // marginTop: '20rem'
  },

  inputColumns: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '2rem'
  }
}

const StepThree = ({classes, handleTabChange, nextValue}) => {



    return (
        <Card className={classes.root} id='step3'>
        <h2 className={classes.steps}>
            Paso 3</h2>
            {/* <h3 style={{color: '#FF8811'}}>
              Social media info
            </h3> */}
            <div className={classes.stepOneInputs}>

              <div className={classes.inputColumns}>

              <h4 style={{color: '#FF8811'}}>
              Redes sociales
            </h4>
              <TextField className={classes.textfields} variant="outlined" placeholder="Facebook" InputProps={{
            endAdornment: <FacebookOutlined />,
          }}/>
              <TextField className={classes.textfields} variant="outlined" placeholder="Twitter" InputProps={{
            endAdornment: <Twitter />,
          }}/>
              <TextField className={classes.textfields} variant="outlined" placeholder="Instagram" InputProps={{
            endAdornment: <Instagram />,
          }}/>
              <TextField className={classes.textfields} variant="outlined" placeholder="YouTube" InputProps={{
            endAdornment: <YouTube />,
          }}/>
              <TextField className={classes.textfields}  variant="outlined" placeholder="Sitio de web" InputProps={{
            endAdornment: <PublicOutlined />,
          }}/>
          </div>

          <div className={classes.inputColumns}>

              <h4 style={{color: '#FF8811'}}>
              Informaci??n de contacto
            </h4>

              <TextField className={classes.textfields} variant="outlined" placeholder="Email" InputProps={{
            endAdornment: <Email />,
          }}/>
              <TextField className={classes.textfields}  variant="outlined" placeholder="N??mero de tel??fono" InputProps={{
            endAdornment: <Phone />,
          }}/>
              <TextField className={classes.textfields}  variant="outlined" placeholder="Ubicaci??n" InputProps={{
            endAdornment: <LocationOn />,
          }}/>

              <h4 style={{color: '#FF8811'}}>
              Bot??n flotante de WhatsApp 
            </h4>

              <TextField className={classes.textfields} variant="outlined" placeholder="N??mero de WhatsApp" InputProps={{
            endAdornment: <WhatsApp />,
          }}/>
          </div>
              </div>

            <Button variant='outlined' className={classes.buttons} onClick={() => handleTabChange(null, nextValue)}>
            Pr??ximo Paso
            </Button>
        </Card>

    )




}


export default withStyles(styles)(StepThree)