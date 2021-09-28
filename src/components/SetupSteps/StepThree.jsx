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
    fontSize: 'calc(1rem + 3vw)'
  },

  textfields: {
    marginBottom: '1rem',
    background: '#FEF9EC'
  },

  stepOneInputs: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // alignItems: 'center'
  },

  buttons: {
    background: '#9DD9D2',
    // marginTop: '20rem'
  },
}

const StepThree = ({classes}) => {



    return (
        <Card className={classes.root} id='step3'>
        <h2 className={classes.steps}>
            Paso 3</h2>
            {/* <h3 style={{color: '#FF8811'}}>
              Social media info
            </h3> */}
            <div className={classes.stepOneInputs}>

              <h4 style={{color: '#FF8811'}}>
              Social media
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
              <TextField className={classes.textfields}  variant="outlined" placeholder="Website" InputProps={{
            endAdornment: <PublicOutlined />,
          }}/>

              <h4 style={{color: '#FF8811'}}>
              Contact info
            </h4>

              <TextField className={classes.textfields} variant="outlined" placeholder="Email" InputProps={{
            endAdornment: <Email />,
          }}/>
              <TextField className={classes.textfields}  variant="outlined" placeholder="Phone number" InputProps={{
            endAdornment: <Phone />,
          }}/>
              <TextField className={classes.textfields}  variant="outlined" placeholder="Location" InputProps={{
            endAdornment: <LocationOn />,
          }}/>

              <h4 style={{color: '#FF8811'}}>
              WhatsApp floating button
            </h4>

              <TextField className={classes.textfields} variant="outlined" placeholder="WhatsApp number" InputProps={{
            endAdornment: <WhatsApp />,
          }}/>
              </div>

            <Button variant='outlined' className={classes.buttons}>
            Próximo Paso
            </Button>
        </Card>

    )




}


export default withStyles(styles)(StepThree)