import React, {useState} from 'react'
import { connect } from 'react-redux'
import { withStyles, TextField, Typography, Button, Card, Tab, Tabs} from '@material-ui/core'
import { SketchPicker } from 'react-color'

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


const StepTwo = ({classes}) => {




    return (
        <Card className={classes.root} id='step2' >
        <h2 className={classes.steps} >
            Paso 2</h2>
            <h3 style={{color: 'white'}}>
              Choose your color palette
            </h3>
            
            <div className={classes.stepOneInputs}>

              <SketchPicker className={classes.colorPicker} />

              <TextField variant="outlined" className={classes.textfields} placeholder="Primary color"/>

              <TextField variant="outlined" className={classes.textfields} placeholder="Background"/>

              <TextField variant="outlined" className={classes.textfields} placeholder="Surface" />

              <TextField variant="outlined" className={classes.textfields} placeholder="On primary" />

              <TextField variant="outlined" className={classes.textfields} placeholder="On secondary" />

              <TextField variant="outlined" className={classes.textfields} placeholder="On background" />

              <TextField variant="outlined" className={classes.textfields} placeholder="On surface" />
              </div>
            <Button className={classes.buttons} >
              Próximo Paso
            </Button>
        </Card>
    )
}


export default withStyles(styles)(StepTwo)